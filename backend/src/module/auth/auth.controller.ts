import { LocalAuthGuard } from './guard/local-auth.guard';
import { Body, Controller, Delete, Get, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    @ApiTags('Login')
    async login(@Request() req): Promise<any> {
        return this.authService.login(req.user);
    }

    @Post('signup')
    @ApiTags('Signup')
    @ApiBody({type: CreateUserDto})
    async signup(@Body() data: CreateUserDto): Promise<any> {
        return this.authService.signup(data);
    }

    @Post('refresh-token')
    @ApiTags('Refresh Token')
    async refreshToken(@Request() req): Promise<any> {
        return this.authService.refreshToken(req);
    }
}