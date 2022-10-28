import { CreateCategoryDto } from './dto/create-category.dto';
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './category.schema';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) { }

    async create(data: CreateCategoryDto): Promise<Category> {
        const newCategory = new this.categoryModel(data);
        return await newCategory.save();
    }

    async findAll(): Promise<Category[]> {
        return await this.categoryModel.find()
    }

    async delete(_id: string): Promise<Category> {
        const category = await this.categoryModel.findByIdAndRemove({_id})
        if (category) {
            return category 
        } else {
            throw new NotFoundException('Category not found')
        }
    }

    async findOne(_id: string): Promise<Category> {
        const category = await this.categoryModel.findById({_id})
        if (category) {
            return category 
        } else {
            throw new NotFoundException('Category not found')
        }
    }

    async update(_id: string, data: CreateCategoryDto): Promise<Category> {
        const category = await this.categoryModel.findByIdAndUpdate(_id, data, {new: true})
        if (category) {
            return category 
        } else {
            throw new NotFoundException('Category not found')
        }
    }
}
