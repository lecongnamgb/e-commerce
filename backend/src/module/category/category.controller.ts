import { CreateCategoryDto } from './dto/create-category.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { Category } from './category.schema';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }
    @Post()
    async create(@Body() data: CreateCategoryDto): Promise<Category> {
        return await this.categoryService.create(data)
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Category> {
        return await this.categoryService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: CreateCategoryDto): Promise<Category> {
        return await this.categoryService.update(id, data)
    }

    @Get()
    async findAll(): Promise<Category[]> {
        return await this.categoryService.findAll();
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Category> {
        return await this.categoryService.delete(id);
    }
}