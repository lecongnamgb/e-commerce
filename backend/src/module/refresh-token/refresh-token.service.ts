import { CreateRefreshTokenDto } from './dto/create-refresh-token.dto';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RefreshToken, RefreshTokenDocument } from './refresh-token.schema';

@Injectable()
export class RefreshTokenService {
    constructor(@InjectModel(RefreshToken.name) private refreshTokenModel: Model<RefreshTokenDocument>) { }

    async create(userId: string, data: CreateRefreshTokenDto) {
        const newRefreshToken = new this.refreshTokenModel({
            user_id: userId,
            ...data
        });
        return await newRefreshToken.save();
    }

    async findByUserId(userId: string) {
        return await this.refreshTokenModel.findOne({ user_id: userId })
    }

    async update(_id: string, data: CreateRefreshTokenDto) {
        return await this.refreshTokenModel.findByIdAndUpdate(_id, data, { new: true })
    }
}
