import { CreateOrderDto } from './dto/create-order.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { Order } from './order.schema';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }
    @Post()
    async create(@Body() data: CreateOrderDto): Promise<Order> {
        return await this.orderService.create(data)
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Order> {
        return await this.orderService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: CreateOrderDto): Promise<Order> {
        return await this.orderService.update(id, data)
    }

    @Get()
    async findAll(): Promise<Order[]> {
        return await this.orderService.findAll();
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Order> {
        return await this.orderService.delete(id);
    }
}