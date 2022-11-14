import { JwtAuthGuard } from './../auth/guard/jwt-auth.guard';
import { CreateProductDto } from './dto/create-product.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';

import { Product } from './product.schema';
import { ProductService } from './product.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @UseGuards(JwtAuthGuard)
    @Get('user')
    @ApiResponse({type: Product})
    @ApiTags('Get product by user id')
    async getByUserId(@Req() req): Promise<Product[]> {
        return await this.productService.getByUserId(req.user.userId);
    }

    @Post()
    @ApiBody({type: CreateProductDto})
    @ApiResponse({type: Product})
    @ApiTags('Create product')
    async create(@Body() data: CreateProductDto): Promise<Product> {
        return await this.productService.create(data)
    }

    @Get(':id')
    @ApiResponse({type: Product})
    @ApiTags('Get product by id')
    async findOne(@Param('id') id: string): Promise<Product> {
        return await this.productService.findOne(id);
    }

    @Patch(':id')
    @ApiResponse({type: Product})
    @ApiTags('Update product by id')
    async update(@Param('id') id: string, @Body() data: CreateProductDto): Promise<Product> {
        return await this.productService.update(id, data)
    }

    @Get()
    @ApiResponse({type: [Product]})
    @ApiTags('Get list product')
    async findAll(@Query() query): Promise<Product[]> {
        return await this.productService.findAll(query);
    }

    @Delete(':id')
    @ApiResponse({type: Product})
    @ApiTags('Delete product by id')
    async delete(@Param('id') id: string): Promise<Product> {
        return await this.productService.delete(id);
    }

    @Get(':id/shop')
    @ApiResponse({type: Product})
    @ApiTags('Get list product by shop id')
    async getListProDuctByShopId(@Param('id') id: string, @Query() query): Promise<Product[]> {
        return await this.productService.getListProDuctByShopId(id, query);
    }
}