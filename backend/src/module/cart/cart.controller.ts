import { CreateCartDto } from './dto/create-cart.dto';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, Req } from '@nestjs/common';

import { CartService } from './cart.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    @ApiTags('Get cart by user id in refresh token')
    async findByUserId(@Req() req) {
        return await this.cartService.findByUserId(req.user.userId);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @ApiTags('Create Cart')
    async create(@Req() req, @Body() data: CreateCartDto) {
        return await this.cartService.create(req.user.userId, data)
    }

    @UseGuards(JwtAuthGuard)
    @Patch()
    @ApiBody({ type: CreateCartDto })
    @ApiTags('Update cart by user id in refresh token')
    async update(@Req() req, @Body() data: CreateCartDto) {
        return await this.cartService.update(req.user.userId, data)
    }
}