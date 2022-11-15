import { CreateOrderStateDto } from './dto/create-order-state.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { OrderStateService } from './order-state.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('order-state')
export class OrderStateController {
    constructor(private readonly orderStateService: OrderStateService) { }
    @Post()
    @ApiBody({ type: CreateOrderStateDto })
    @ApiTags('Create order state')
    async create(@Body() data: CreateOrderStateDto) {
        return await this.orderStateService.create(data)
    }

    @Get(':id')
    @ApiTags('Get order state by id')
    async findOne(@Param('id') id: string) {
        return await this.orderStateService.findOne(id);
    }

    @Patch(':id')
    @ApiBody({ type: CreateOrderStateDto })
    @ApiTags('Update order state by id')
    async update(@Param('id') id: string, @Body() data: CreateOrderStateDto) {
        return await this.orderStateService.update(id, data)
    }

    @Get()
    @ApiTags('Get list order state')
    async findAll() {
        return await this.orderStateService.findAll();
    }

    @Delete(':id')
    @ApiTags('Delete order state by id')
    async delete(@Param('id') id: string) {
        return await this.orderStateService.delete(id);
    }
}