import * as bcrypt from 'bcrypt';

import { BadRequestException, Injectable } from '@nestjs/common';

import { CreateUserDto } from '../user/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenService } from '../refresh-token/refresh-token.service';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private refreshTokenService: RefreshTokenService,
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findByUsername(username);
    if (user && await bcrypt.compare(pass, user.password)) {
      return user
    }
    return null;
  }

  async login(user: any): Promise<any> {
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
        userId: user._id,
        refreshToken,
      });
    } else {
      await this.refreshTokenService.update(
        token._id,
        {
          refreshToken,
          userId: user._id
        }
      );
    }

    return {
      refreshToken
    }
  }

  async signup(data: CreateUserDto): Promise<any> {
    let user = await this.userService.findByUsername(data.username)
    if (user) {
      throw new BadRequestException()
    } else {
      data.password = await bcrypt.hash(data.password, Number(process.env.SALT_ROUND))
      user = await this.userService.create(data)
      delete user.password
      return user
    }
  }

  async refreshToken(req): Promise<any> {
    try {
      const refreshToken = req.headers['x-refresh-token'];
      if (!refreshToken) {
        throw new BadRequestException()
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
        accessToken
      }
    } catch (err) {
      if (err.message === 'jwt expired') {
        throw new BadRequestException('jwt expired')
      } else if (err.message === 'Bad Request') {
        throw new BadRequestException()
      }
    }
  }
}