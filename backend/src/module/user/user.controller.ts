import { JwtAuthGuard } from './../auth/guard/jwt-auth.guard';
import { Controller, Get, UseGuards, Req } from '@nestjs/common';

import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @UseGuards(JwtAuthGuard)
    @Get('/product')
    @ApiTags('Get count product like')
    async getCountProductLike(@Req() req) {
        return await this.userService.getCountProductLike(req.user.userId);
    }
}