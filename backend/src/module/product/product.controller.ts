import { CreateProductDto } from './dto/create-product.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { Product } from './product.schema';
import { ProductService } from './product.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }
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
    async findAll(): Promise<Product[]> {
        return await this.productService.findAll();
    }

    @Delete(':id')
    @ApiResponse({type: Product})
    @ApiTags('Delete product by id')
    async delete(@Param('id') id: string): Promise<Product> {
        return await this.productService.delete(id);
    }
}