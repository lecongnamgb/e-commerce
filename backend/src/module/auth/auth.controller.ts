import { ResetPasswordDto } from './dto/reset-password.dto';
import { GetCodeResetDto } from './dto/get-code-reset.dto';
import { ChangePassWordDto } from './dto/change-password.dto';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { SignUpDto } from './dto/sign-up.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    @ApiTags('Login')
    async login(@Request() req) {
        return await this.authService.login(req.user);
    }

    @Post('signup')
    @ApiTags('Signup')
    @ApiBody({ type: SignUpDto })
    async signup(@Body() data: SignUpDto) {
        return await this.authService.signup(data);
    }

    @Post('refresh-token')
    @ApiTags('Refresh token')
    async refreshToken(@Request() req) {
        return await this.authService.refreshToken(req);
    }

    @UseGuards(JwtAuthGuard)
    @Post('change-password')
    @ApiTags('Change password')
    @ApiBody({ type: ChangePassWordDto })
    async changePassWord(@Request() req, @Body() data: ChangePassWordDto) {
        return await this.authService.changePassWord(req.user.userId, data);
    }

    @Post('code-reset')
    @ApiTags('Get code reset')
    @ApiBody({ type: GetCodeResetDto })
    async getCodeReset(@Body() data: GetCodeResetDto) {
        return await this.authService.getCodeReset(data.email);
    }

    @Post('reset-password')
    @ApiTags('Reset password')
    @ApiBody({ type: ResetPasswordDto })
    async resetPassWod(@Body() data: ResetPasswordDto) {
        return await this.authService.resetPassWod(data);
    }
}