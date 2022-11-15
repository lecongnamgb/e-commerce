import { JwtAuthGuard } from './../auth/guard/jwt-auth.guard';
import { CreateShopDto } from './dto/create-shop.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';

import { ShopService } from './shop.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('shop')
export class ShopController {
    constructor(private readonly shopService: ShopService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    @ApiBody({ type: CreateShopDto })
    @ApiTags('Create shop')
    async create(@Body() data: CreateShopDto, @Req() req) {
        data.user_id = req.user.userId
        return await this.shopService.create(data)
    }

    @Get(':id')
    @ApiTags('Get shop by id')
    async findOne(@Param('id') id: string) {
        return await this.shopService.findOne(id);
    }

    @Patch(':id')
    @ApiBody({ type: CreateShopDto })
    @ApiTags('Update shop by id')
    async update(@Param('id') id: string, @Body() data: CreateShopDto) {
        return await this.shopService.update(id, data)
    }

    @Get()
    @ApiTags('Get list shop')
    async findAll() {
        return await this.shopService.findAll();
    }

    @Delete(':id')
    @ApiTags('Delete shop by id')
    async delete(@Param('id') id: string) {
        return await this.shopService.delete(id);
    }
}