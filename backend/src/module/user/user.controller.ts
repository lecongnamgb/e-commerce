import { CreateUserDto } from './dto/create-user.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { User } from './user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Post()
    async create(@Body() data: CreateUserDto): Promise<User> {
        return await this.userService.create(data)
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User> {
        return await this.userService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: CreateUserDto): Promise<User> {
        return await this.userService.update(id, data)
    }

    @Get()
    async findAll(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<User> {
        return await this.userService.delete(id);
    }
}