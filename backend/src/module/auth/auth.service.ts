import * as bcrypt from 'bcrypt';

import { BadRequestException, Injectable } from '@nestjs/common';

import { ChangePassWordDto } from './dto/change-password.dto';
import { JwtService } from '@nestjs/jwt';
import { MailerService } from '@nestjs-modules/mailer';
import { RefreshTokenService } from '../refresh-token/refresh-token.service';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private refreshTokenService: RefreshTokenService,
    private mailerService: MailerService
  ) { }

  async validateUser(username: string, password: string) {
    const user = await this.userService.findByUsername(username);
    if (user && await bcrypt.compare(password, user.password)) {
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
      await this.refreshTokenService.create(
        user._id,
        {
          refreshToken,
        });
    } else {
      await this.refreshTokenService.update(
        token._id,
        {
          refreshToken,
        }
      );
    }

    const userData = await this.userService.findById(user._id)
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

  async changePassWord(userId: string, data: ChangePassWordDto) {
    const user = await this.userService.findById(userId)
    if (user) {
      if (await bcrypt.compare(data.oldPassword, user.password)) {
        data.password = await bcrypt.hash(data.password, Number(process.env.SALT_ROUND))
        await this.userService.updatePassword(
          user._id,
          data.password
        )
        return {
          success: true
        }
      } else {
        return {
          success: false,
          data: [],
          message: "Password wrong"
        }
      }
    } else {
      return {
        success: false,
        data: [],
        message: "User not found"
      }
    }
  }

  async getCodeReset(email: string) {
    const user = await this.userService.findByEmail(email)
    if (!user) {
      return {
        success: false,
        data: [],
        message: "User not found"
      }
    }

    let code = "";
    let charList = "0123456789";
    for (var i = 0; i < 6; i++) {
      code += charList.charAt(Math.floor(Math.random() * charList.length));
    }

    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Reset code',
      template: './reset-code',
      context: {
        code
      },
    });

    await this.userService.updateCodeReset(user._id, code)

    return {
      success: true
    }
  }

  async resetPassWod(data: ResetPasswordDto) {
    const user = await this.userService.findByEmail(data.email)
    if (!user) {
      return {
        success: false,
        data: [],
        message: "User not found"
      }
    }

    if (user.codeReset === data.code) {
      let password = "";
      let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 6; i++) {
        password += charList.charAt(Math.floor(Math.random() * charList.length));
      }
      const hashPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUND))
      await this.userService.updatePassword(
        user._id,
        hashPassword
      )
      await this.userService.updateCodeReset(user._id, null)
      await this.mailerService.sendMail({
        to: user.email,
        subject: 'Reset password',
        template: './reset-password',
        context: {
          username: user.username,
          password
        },
      });
      return {
        success: true
      }
    } else {
      return {
        success: false,
        data: [],
        message: "Code reset wrong"
      }
    }
  }
}