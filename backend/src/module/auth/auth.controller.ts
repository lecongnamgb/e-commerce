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
    @ApiTags('Refresh Token')
    async refreshToken(@Request() req) {
        return await this.authService.refreshToken(req);
    }
}