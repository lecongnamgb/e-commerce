import { CreateCategoryDto } from './dto/create-category.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { Category } from './category.schema';
import { CategoryService } from './category.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }
    @Post()
    @ApiResponse({type: Category})
    @ApiBody({type: CreateCategoryDto})
    @ApiTags('Create category')
    async create(@Body() data: CreateCategoryDto): Promise<Category> {
        return await this.categoryService.create(data)
    }

    @Get(':id')
    @ApiResponse({type: Category})
    @ApiTags('Get category by id')
    async findOne(@Param('id') id: string): Promise<Category> {
        return await this.categoryService.findOne(id);
    }

    @Patch(':id')
    @ApiResponse({type: Category})
    @ApiTags('Update category by id')
    async update(@Param('id') id: string, @Body() data: CreateCategoryDto): Promise<Category> {
        return await this.categoryService.update(id, data)
    }

    @Get()
    @ApiResponse({type: [Category]})
    @ApiTags('Get list category')
    async findAll(): Promise<Category[]> {
        return await this.categoryService.findAll();
    }

    @Delete(':id')
    @ApiResponse({type: Category})
    @ApiTags('Delete category by id')
    async delete(@Param('id') id: string): Promise<Category> {
        return await this.categoryService.delete(id);
    }
}