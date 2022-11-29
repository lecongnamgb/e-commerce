import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from './../auth/guard/jwt-auth.guard';
import { Controller, Get, UseGuards, Req, Param, Delete, Patch, Body } from '@nestjs/common';

import { UserService } from './user.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('all')
    @ApiTags('Get list user')
    async findAll() {
        return await this.userService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/product')
    @ApiTags('Get count product like')
    async getCountProductLike(@Req() req) {
        return await this.userService.getCountProductLike(req.user.userId);
    }

    @Get(':id')
    @ApiTags('Get user by id')
    async findOne(@Param('id') id: string) {
        return await this.userService.findOne(id);
    }

    @Patch(':id')
    @ApiBody({ type: UpdateUserDto })
    @ApiTags('Update user by id')
    async update(@Param('id') id: string, @Body() data: UpdateUserDto) {
        return await this.userService.update(id, data)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    @ApiTags('Get user by user id in access token')
    async getUserById(@Req() req) {
        return await this.userService.findOne(req.user.userId);
    }

    @Delete(':id')
    @ApiTags('Delete user by id')
    async delete(@Param('id') id: string) {
        return await this.userService.delete(id);
    }
}