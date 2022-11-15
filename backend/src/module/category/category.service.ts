import { CreateCategoryDto } from './dto/create-category.dto';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './category.schema';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) { }

    async create(data: CreateCategoryDto) {
        const newCategory = new this.categoryModel(data);
        await newCategory.save();
        return {
            success: true,
            data: newCategory
        }
    }

    async findAll() {
        const category = await this.categoryModel.find()
        return {
            success: true,
            data: category
        }
    }

    async delete(_id: string) {
        const category = await this.categoryModel.findByIdAndRemove({ _id })
        if (category) {
            return {
                success: true,
            }
        } else {
            return {
                success: false,
                data: [],
                message: 'Category not found'
            }
        }
    }

    async findOne(_id: string) {
        const category = await this.categoryModel.findById({ _id })
        if (category) {
            return {
                success: true,
                data: category
            }
        } else {
            return {
                success: false,
                data: [],
                message: 'Category not found'
            }
        }
    }

    async update(_id: string, data: CreateCategoryDto) {
        const category = await this.categoryModel.findByIdAndUpdate(_id, data, { new: true })
        if (category) {
            return {
                success: true
            }
        } else {
            return {
                success: false,
                data: [],
                message: 'Category not found'
            }
        }
    }
}
