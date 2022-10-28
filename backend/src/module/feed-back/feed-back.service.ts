import { CreateFeedBackDto } from './dto/create-feed-back.dto';
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FeedBack, FeedBackDocument } from './feed-back.schema';

@Injectable()
export class FeedBackService {
    constructor(@InjectModel(FeedBack.name) private feedBackModel: Model<FeedBackDocument>) { }

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
}
