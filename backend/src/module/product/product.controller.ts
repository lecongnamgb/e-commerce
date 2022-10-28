import { CreateProductDto } from './dto/create-product.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { Product } from './product.schema';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }
    @Post()
    async create(@Body() data: CreateProductDto): Promise<Product> {
        return await this.productService.create(data)
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Product> {
        return await this.productService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: CreateProductDto): Promise<Product> {
        return await this.productService.update(id, data)
    }

    @Get()
    async findAll(): Promise<Product[]> {
        return await this.productService.findAll();
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Product> {
        return await this.productService.delete(id);
    }
}