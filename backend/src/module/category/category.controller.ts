import { CreateCategoryDto } from './dto/create-category.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CategoryService } from './category.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }
    @Post()
    @ApiBody({ type: CreateCategoryDto })
    @ApiTags('Create category')
    async create(@Body() data: CreateCategoryDto) {
        return await this.categoryService.create(data)
    }

    @Get(':id')
    @ApiTags('Get category by id')
    async findOne(@Param('id') id: string) {
        return await this.categoryService.findOne(id);
    }

    @Patch(':id')
    @ApiBody({ type: CreateCategoryDto })
    @ApiTags('Update category by id')
    async update(@Param('id') id: string, @Body() data: CreateCategoryDto) {
        return await this.categoryService.update(id, data)
    }

    @Get()
    @ApiTags('Get list category')
    async findAll() {
        return await this.categoryService.findAll();
    }

    @Delete(':id')
    @ApiTags('Delete category by id')
    async delete(@Param('id') id: string) {
        return await this.categoryService.delete(id);
    }
}