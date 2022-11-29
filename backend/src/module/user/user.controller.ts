import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from './../auth/guard/jwt-auth.guard';
import { Controller, Get, UseGuards, Req, Patch, Body } from '@nestjs/common';

import { UserService } from './user.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @UseGuards(JwtAuthGuard)
    @Get('/product')
    @ApiTags('Get count product like')
    async getCountProductLike(@Req() req) {
        return await this.userService.getCountProductLike(req.user.userId);
    }

    @UseGuards(JwtAuthGuard)
    @Patch()
    @ApiBody({ type: UpdateUserDto })
    @ApiTags('Update user by user id in access token')
    async update(@Req() req, @Body() data: UpdateUserDto) {
        return await this.userService.update(req.user.userId, data)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    @ApiTags('Get user by user id in access token')
    async getUserById(@Req() req) {
        return await this.userService.findOne(req.user.userId);
    }
}