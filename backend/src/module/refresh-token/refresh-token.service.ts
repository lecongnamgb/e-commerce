import { CreateRefreshTokenDto } from './dto/create-refresh-token.dto';
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RefreshToken, RefreshTokenDocument } from './refresh-token.schema';

@Injectable()
export class RefreshTokenService {
    constructor(@InjectModel(RefreshToken.name) private refreshTokenModel: Model<RefreshTokenDocument>) { }

    async create(data: CreateRefreshTokenDto): Promise<RefreshToken> {
        const newRefreshToken = new this.refreshTokenModel(data);
        return await newRefreshToken.save();
    }

    async findAll(): Promise<RefreshToken[]> {
        return await this.refreshTokenModel.find()
    }

    async delete(_id: string): Promise<RefreshToken> {
        const refreshToken = await this.refreshTokenModel.findByIdAndRemove({_id})
        if (refreshToken) {
            return refreshToken 
        } else {
            throw new NotFoundException('RefreshToken not found')
        }
    }

    async findOne(_id: string): Promise<RefreshToken> {
        const refreshToken = await this.refreshTokenModel.findById({_id})
        if (refreshToken) {
            return refreshToken 
        } else {
            throw new NotFoundException('RefreshToken not found')
        }
    }

    async findByUserId(userId: string): Promise<any> {
        return await this.refreshTokenModel.findOne({user_id: userId})
    }

    async update(_id: string, data: CreateRefreshTokenDto): Promise<RefreshToken> {
        const refreshToken = await this.refreshTokenModel.findByIdAndUpdate(_id, data, {new: true})
        if (refreshToken) {
            return refreshToken 
        } else {
            throw new NotFoundException('RefreshToken not found')
        }
    }
}
