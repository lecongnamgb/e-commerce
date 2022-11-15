import { Product, ProductDocument } from './../product/product.schema';
import { CreateFeedBackDto } from './dto/create-feed-back.dto';
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FeedBack, FeedBackDocument } from './feed-back.schema';
import * as moment from 'moment';

@Injectable()
export class FeedBackService {
    constructor(
        @InjectModel(FeedBack.name) private feedBackModel: Model<FeedBackDocument>,
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    ) { }

    async create(data: CreateFeedBackDto) {
        const product = await this.productModel.findOne({ _id: data.product_id })
        if (!product) {
            return {
                success: false,
                data: [],
                message: "Product not found"
            }
        }
        const newFeedBack = new this.feedBackModel(data);
        await newFeedBack.save();
        return {
            success: true,
            data: newFeedBack
        }
    }

    async findAll() {
        const feedBack = await this.feedBackModel.find()
        return {
            success: true,
            data: feedBack
        }
    }

    async delete(_id: string) {
        const feedBack = await this.feedBackModel.findByIdAndRemove({ _id })
        if (feedBack) {
            return {
                success: true
            }
        } else {
            return {
                success: false,
                data: [],
                message: "FeedBack not found"
            }
        }
    }

    async findOne(_id: string) {
        const feedBack = await this.feedBackModel.findById({ _id })
        if (feedBack) {
            return {
                success: true,
                data: feedBack
            }
        } else {
            return {
                success: false,
                data: [],
                message: "FeedBack not found"
            }
        }
    }

    async update(_id: string, data: CreateFeedBackDto) {
        const feedBack = await this.feedBackModel.findByIdAndUpdate(_id, data, { new: true })
        if (feedBack) {
            return {
                success: true
            }
        } else {
            return {
                success: false,
                data: [],
                message: "FeedBack not found"
            }
        }
    }

    async getFeedBackByUserId(id: string) {
        const feedBack = await this.feedBackModel.find({ user_id: id })
        return {
            success: true,
            data: feedBack
        }
    }

    async getFeedBackByStar(userId: string, star: number) {
        const feedBack = await this.feedBackModel.find({ number_star: star, user_id: userId })
        return {
            success: true,
            data: feedBack
        }
    }

    async getFeedBackByProductId(id: string) {
        const product = await this.productModel.findOne({ _id: id })
        if (!product) {
            return {
                success: false,
                data: [],
                message: "Product not found"
            }
        }
        const list = await this.feedBackModel.find({ product_id: id })
        list.forEach(item => {
            item.created_at = moment(new Date(item.created_at)).format('DD-MM-YYYY hh:mm')
            item.updated_at = moment(new Date(item.updated_at)).format('DD-MM-YYYY hh:mm')
        })
        const total = list.length
        return {
            success: false,
            data: {
                list,
                total
            }
        }
    }
}
