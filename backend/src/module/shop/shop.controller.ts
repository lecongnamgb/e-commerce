import { JwtAuthGuard } from './../auth/guard/jwt-auth.guard';
import { CreateShopDto } from './dto/create-shop.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';

import { Shop } from './shop.schema';
import { ShopService } from './shop.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('shop')
export class ShopController {
    constructor(private readonly shopService: ShopService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    @ApiResponse({type: Shop})
    @ApiBody({type: CreateShopDto})
    @ApiTags('Create shop')
    async create(@Body() data: CreateShopDto, @Req() req): Promise<Shop> {
        data.user_id = req.user.userId
        return await this.shopService.create(data)
    }

    @Get(':id')
    @ApiResponse({type: Shop})
    @ApiTags('Get shop by id')
    async findOne(@Param('id') id: string): Promise<Shop> {
        return await this.shopService.findOne(id);
    }

    @Patch(':id')
    @ApiResponse({type: Shop})
    @ApiTags('Update shop by id')
    async update(@Param('id') id: string, @Body() data: CreateShopDto): Promise<Shop> {
        return await this.shopService.update(id, data)
    }

    @Get()
    @ApiResponse({type: [Shop]})
    @ApiTags('Get list shop')
    async findAll(): Promise<Shop[]> {
        return await this.shopService.findAll();
    }

    @Delete(':id')
    @ApiResponse({type: Shop})
    @ApiTags('Delete shop by id')
    async delete(@Param('id') id: string): Promise<Shop> {
        return await this.shopService.delete(id);
    }
}