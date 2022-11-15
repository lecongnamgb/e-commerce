import { JwtAuthGuard } from './../auth/guard/jwt-auth.guard';
import { CreateOrderDto } from './dto/create-order.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, Req } from '@nestjs/common';

import { OrderService } from './order.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @UseGuards(JwtAuthGuard)
    @Get(':id/shop')
    @ApiTags('Get list order by shop id')
    async getListOrderByShopId(@Param('id') id: string, @Req() req) {
        return await this.orderService.getListOrderByShopId(id, req.user.userId);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id/state')
    @ApiTags('Get list order by state id')
    async getListOrderByStateId(@Param('id') id: string, @Req() req) {
        return await this.orderService.getListOrderByStateId(id, req.user.userId);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @ApiBody({ type: CreateOrderDto })
    @ApiTags('Create order')
    async create(@Body() data: CreateOrderDto, @Req() req) {
        data.user_id = req.user.userId
        return await this.orderService.create(data)
    }

    @Get(':id')
    @ApiTags('Get order by id')
    async findOne(@Param('id') id: string) {
        return await this.orderService.findOne(id);
    }

    @Patch(':id')
    @ApiBody({ type: CreateOrderDto })
    @ApiTags('Update order by id')
    async update(@Param('id') id: string, @Body() data: CreateOrderDto) {
        return await this.orderService.update(id, data)
    }

    @Get()
    @ApiTags('Get list order')
    async findAll() {
        return await this.orderService.findAll();
    }

    @Delete(':id')
    @ApiTags('Delete order by id')
    async delete(@Param('id') id: string) {
        return await this.orderService.delete(id);
    }
}