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

    async create(userId: string, data: CreateFeedBackDto) {
        const product = await this.productModel.findOne({ _id: data.productId })
        if (!product) {
            return {
                success: false,
                data: [],
                message: "Product not found"
            }
        }
        const newFeedBack = new this.feedBackModel({
            userId,
            ...data
        });
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

    async getFeedBackByUserId(userId: string) {
        const feedBack = await this.feedBackModel.find({ userId })
        return {
            success: true,
            data: feedBack
        }
    }

    async getFeedBackByStar(userId: string, numberStar: number) {
        const feedBack = await this.feedBackModel.find({ numberStar, userId })
        return {
            success: true,
            data: feedBack
        }
    }

    async getFeedBackByProductId(_id: string) {
        const product = await this.productModel.findOne({ _id })
        if (!product) {
            return {
                success: false,
                data: [],
                message: "Product not found"
            }
        }
        const list = await this.feedBackModel.find({ productId: _id })
        list.forEach(item => {
            item.createdAt = moment(new Date(item.createdAt)).format('DD-MM-YYYY hh:mm')
            item.updatedAt = moment(new Date(item.updatedAt)).format('DD-MM-YYYY hh:mm')
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
