import { QueryProductDto } from './dto/query-product.dto';
import { JwtAuthGuard } from './../auth/guard/jwt-auth.guard';
import { CreateProductDto } from './dto/create-product.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';

import { ProductService } from './product.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @UseGuards(JwtAuthGuard)
    @Get('user')
    @ApiTags('Get product by user id')
    async getByUserId(@Req() req) {
        return await this.productService.getByUserId(req.user.userId);
    }

    @Post()
    @ApiBody({ type: CreateProductDto })
    @ApiTags('Create product')
    async create(@Body() data: CreateProductDto) {
        return await this.productService.create(data)
    }

    @Get(':id')
    @ApiTags('Get product by id')
    async findOne(@Param('id') id: string) {
        return await this.productService.findOne(id);
    }

    @Patch(':id')
    @ApiBody({ type: CreateProductDto })
    @ApiTags('Update product by id')
    async update(@Param('id') id: string, @Body() data: CreateProductDto) {
        return await this.productService.update(id, data)
    }

    @Get()
    @ApiTags('Get list product')
    async findAll(@Query() query: QueryProductDto) {
        return await this.productService.findAll(query);
    }

    @Delete(':id')
    @ApiTags('Delete product by id')
    async delete(@Param('id') id: string) {
        return await this.productService.delete(id);
    }

    @Get(':id/shop')
    @ApiTags('Get list product by shop id')
    async getListProDuctByShopId(@Param('id') id: string, @Query() query: QueryProductDto) {
        return await this.productService.getListProDuctByShopId(id, query);
    }
}