import { CreateShopDto } from './dto/create-shop.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { Shop } from './shop.schema';
import { ShopService } from './shop.service';

@Controller('shop')
export class ShopController {
    constructor(private readonly shopService: ShopService) { }
    @Post()
    async create(@Body() data: CreateShopDto): Promise<Shop> {
        return await this.shopService.create(data)
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Shop> {
        return await this.shopService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: CreateShopDto): Promise<Shop> {
        return await this.shopService.update(id, data)
    }

    @Get()
    async findAll(): Promise<Shop[]> {
        return await this.shopService.findAll();
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Shop> {
        return await this.shopService.delete(id);
    }
}