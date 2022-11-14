import { JwtAuthGuard } from './../auth/guard/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, Req } from '@nestjs/common';

import { User } from './user.schema';
import { UserService } from './user.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @UseGuards(JwtAuthGuard)
    @Get('/product')
    @ApiResponse({type: User})
    @ApiTags('Get count product like')
    async getCountProductLike(@Req() req): Promise<any> {
        return await this.userService.getCountProductLike(req.user.userId);
    }

    @Post()
    @ApiResponse({type: User})
    @ApiBody({type: CreateUserDto})
    @ApiTags('Create user')
    async create(@Body() data: CreateUserDto): Promise<User> {
        return await this.userService.create(data)
    }

    @Get(':id')
    @ApiResponse({type: User})
    @ApiTags('Get user by id')
    async findOne(@Param('id') id: string): Promise<User> {
        return await this.userService.findOne(id);
    }

    @Patch(':id')
    @ApiResponse({type: User})
    @ApiTags('Update user by id')
    async update(@Param('id') id: string, @Body() data: CreateUserDto): Promise<User> {
        return await this.userService.update(id, data)
    }

    @Get()
    @ApiResponse({type: [User]})
    @ApiTags('Get list user')
    async findAll(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Delete(':id')
    @ApiResponse({type: User})
    @ApiTags('Delete user by id')
    async delete(@Param('id') id: string): Promise<User> {
        return await this.userService.delete(id);
    }
}