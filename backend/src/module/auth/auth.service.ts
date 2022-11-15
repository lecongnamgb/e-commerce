import * as bcrypt from 'bcrypt';

import { BadRequestException, Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { RefreshTokenService } from '../refresh-token/refresh-token.service';
import { SignUpDto } from './dto/sign-up.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private refreshTokenService: RefreshTokenService,
  ) { }

  async validateUser(username: string, pass: string) {
    const user = await this.userService.findByUsername(username);
    if (user && await bcrypt.compare(pass, user.password)) {
      return user
    }
    return null;
  }

  async login(user: any) {
    const refreshToken = this.jwtService.sign(
      {
        userId: user._id,
        username: user.username,
      },
      {
        secret: process.env.REFRESH_TOKEN_SECRET,
        expiresIn: process.env.REFRESH_TOKEN_LIFE,
      },
    );

    const token = await this.refreshTokenService.findByUserId(user._id);

    if (!token) {
      await this.refreshTokenService.create({
        user_id: user._id,
        refresh_token: refreshToken,
      });
    } else {
      await this.refreshTokenService.update(
        token._id,
        {
          refresh_token: refreshToken,
          user_id: user._id
        }
      );
    }

    const userData = await this.userService.findOne(user._id)
    delete userData["_doc"].password

    return {
      success: true,
      data: {
        ...userData["_doc"],
        refreshToken
      }
    }
  }

  async signup(data: SignUpDto) {
    let user = await this.userService.findByUsername(data.username)
    if (user) {
      throw new BadRequestException('Username already exists')
    } else {
      const email = await this.userService.findByEmail(data.email)
      if (email) {
        throw new BadRequestException('Email already exists')
      }
      data.password = await bcrypt.hash(data.password, Number(process.env.SALT_ROUND))
      user = await this.userService.create(data)
      delete user["_doc"].password
      return {
        success: true,
        data: user
      }
    }
  }

  async refreshToken(req) {
    try {
      const refreshToken = req.headers['x-refresh-token'];
      if (!refreshToken) {
        throw new BadRequestException('No refresh token')
      }

      const decoded = await this.jwtService.verify(refreshToken, {
        secret: process.env.REFRESH_TOKEN_SECRET,
      })

      const payload = {
        userId: decoded.userId,
        username: decoded.username
      };
      const accessToken = await this.jwtService.sign(payload, {
        secret: process.env.ACCESS_TOKEN_SECRET,
        expiresIn: process.env.ACCESS_TOKEN_LIFE,
      });

      return {
        success: true,
        data: accessToken
      }
    } catch (err) {
      throw err
    }
  }
}