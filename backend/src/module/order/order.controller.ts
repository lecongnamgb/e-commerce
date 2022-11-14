import { JwtAuthGuard } from './../auth/guard/jwt-auth.guard';
import { CreateOrderDto } from './dto/create-order.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, Req } from '@nestjs/common';

import { Order } from './order.schema';
import { OrderService } from './order.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @UseGuards(JwtAuthGuard)
    @Get(':id/shop')
    @ApiResponse({type: Order})
    @ApiTags('Get list order by shop id')
    async getListOrderByShopId(@Param('id') id: string, @Req() req): Promise<Order[]> {
        return await this.orderService.getListOrderByShopId(id, req.user.userId);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id/state')
    @ApiResponse({type: Order})
    @ApiTags('Get list order by state id')
    async getListOrderByStateId(@Param('id') id: string, @Req() req): Promise<Order[]> {
        return await this.orderService.getListOrderByStateId(id, req.user.userId);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @ApiBody({type: CreateOrderDto})
    @ApiResponse({type: Order})
    @ApiTags('Create order')
    async create(@Body() data: CreateOrderDto, @Req() req): Promise<Order> {
        data.user_id = req.user.userId
        return await this.orderService.create(data)
    }

    @Get(':id')
    @ApiResponse({type: Order})
    @ApiTags('Get order by id')
    async findOne(@Param('id') id: string): Promise<Order> {
        return await this.orderService.findOne(id);
    }

    @Patch(':id')
    @ApiResponse({type: Order})
    @ApiTags('Update order by id')
    async update(@Param('id') id: string, @Body() data: CreateOrderDto): Promise<Order> {
        return await this.orderService.update(id, data)
    }

    @Get()
    @ApiResponse({type: [Order]})
    @ApiTags('Get list order')
    async findAll(): Promise<Order[]> {
        return await this.orderService.findAll();
    }

    @Delete(':id')
    @ApiResponse({type: Order})
    @ApiTags('Delete order by id')
    async delete(@Param('id') id: string): Promise<Order> {
        return await this.orderService.delete(id);
    }
}