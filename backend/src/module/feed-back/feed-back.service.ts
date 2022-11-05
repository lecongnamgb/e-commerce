import { ProductService } from './../product/product.service';
import { UserService } from './../user/user.service';
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
        private userService: UserService,
        private productService: ProductService
    ) { }

    async create(data: CreateFeedBackDto): Promise<FeedBack> {
        const newFeedBack = new this.feedBackModel(data);
        return await newFeedBack.save();
    }

    async findAll(): Promise<FeedBack[]> {
        return await this.feedBackModel.find()
    }

    async delete(_id: string): Promise<FeedBack> {
        const feedBack = await this.feedBackModel.findByIdAndRemove({_id})
        if (feedBack) {
            return feedBack
        } else {
            throw new NotFoundException('FeedBack not found')
        }
    }

    async findOne(_id: string): Promise<FeedBack> {
        const feedBack = await this.feedBackModel.findById({_id})
        if (feedBack) {
            return feedBack
        } else {
            throw new NotFoundException('FeedBack not found')
        }
    }

    async update(_id: string, data: CreateFeedBackDto): Promise<FeedBack> {
        const feedBack = await this.feedBackModel.findByIdAndUpdate(_id, data, {new: true})
        if (feedBack) {
            return feedBack
        } else {
            throw new NotFoundException('FeedBack not found')
        }
    }

    async getFeedBackByUserId(id: string): Promise<FeedBack[]> {
        const user = await this.userService.findOne(id)
        if (!user) {
            throw new NotFoundException('User not found')
        }
        return await this.feedBackModel.find({user_id: id})
    }

    async getFeedBackByStar(userId: string, star: number): Promise<FeedBack[]> {
        const user = await this.userService.findOne(userId)
        if (!user) {
            throw new NotFoundException('User not found')
        }
        return await this.feedBackModel.find({number_star: star})
    }

    async getFeedBackByProductId(id: string): Promise<any> {
        const product = await this.productService.findOne(id)
        if (!product) {
            throw new NotFoundException('Product not found')
        }
        const list = await this.feedBackModel.find({product_id: id})
        list.forEach(item => {
            item.createdAt = moment(new Date(item.createdAt)).format('DD-MM-YYYY hh:mm')
            item.updatedAt = moment(new Date(item.updatedAt)).format('DD-MM-YYYY hh:mm')
        })
        const total = list.length
        return {
            list,
            total
        }
    }
}
