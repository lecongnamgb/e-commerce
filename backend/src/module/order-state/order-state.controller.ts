import { CreateOrderStateDto } from './dto/create-order-state.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { OrderState } from './order-state.schema';
import { OrderStateService } from './order-state.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('order-state')
export class OrderStateController {
    constructor(private readonly orderStateService: OrderStateService) { }
    @Post()
    @ApiBody({type: CreateOrderStateDto})
    @ApiResponse({type: OrderState})
    @ApiTags('Create order state')
    async create(@Body() data: CreateOrderStateDto): Promise<OrderState> {
        return await this.orderStateService.create(data)
    }

    @Get(':id')
    @ApiResponse({type: OrderState})
    @ApiTags('Get order state by id')
    async findOne(@Param('id') id: string): Promise<OrderState> {
        return await this.orderStateService.findOne(id);
    }

    @Patch(':id')
    @ApiResponse({type: OrderState})
    @ApiTags('Update order state by id')
    async update(@Param('id') id: string, @Body() data: CreateOrderStateDto): Promise<OrderState> {
        return await this.orderStateService.update(id, data)
    }

    @Get()
    @ApiResponse({type: [OrderState]})
    @ApiTags('Get list order state')
    async findAll(): Promise<OrderState[]> {
        return await this.orderStateService.findAll();
    }

    @Delete(':id')
    @ApiResponse({type: OrderState})
    @ApiTags('Delete order state by id')
    async delete(@Param('id') id: string): Promise<OrderState> {
        return await this.orderStateService.delete(id);
    }
}