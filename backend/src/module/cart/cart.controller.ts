import { CreateCartDto } from './dto/create-cart.dto';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, Req } from '@nestjs/common';

import { CartService } from './cart.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) { }

    @UseGuards(JwtAuthGuard)
    @Get('user')
    @ApiTags('Get cart by user id')
    async findByUserId(@Req() req) {
        return await this.cartService.findByUserId(req.user.userId);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @ApiTags('Create Cart')
    async create(@Req() req, @Body() data: CreateCartDto) {
        return await this.cartService.create(req.user.userId, data)
    }

    @Get(':id')
    @ApiTags('Get cart by id')
    async findOne(@Param('id') id: string) {
        return await this.cartService.findOne(id);
    }

    @Patch(':id')
    @ApiBody({ type: CreateCartDto })
    @ApiTags('Update cart by id')
    async update(@Param('id') id: string, @Body() data: CreateCartDto) {
        return await this.cartService.update(id, data)
    }

    @Delete(':id')
    @ApiTags('Delete cart by id')
    async delete(@Param('id') id: string) {
        return await this.cartService.delete(id);
    }
}