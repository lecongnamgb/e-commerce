import { SignUpDto } from './../auth/dto/sign-up.dto';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async create(data: SignUpDto) {
        const newUser = new this.userModel(data);
        return await newUser.save();
    }

    async findOne(_id: string) {
        return await this.userModel.findById({ _id })
    }

    async findByUsername(username: string) {
        return await this.userModel.findOne({ username })
    }

    async findByEmail(email: string) {
        return await this.userModel.findOne({ email })
    }

    async getCountProductLike(id: string) {
        const user = await this.findOne(id)
        return {
            success: true,
            data: {
                total: user.favorite_product_ids.length
            }
        }
    }
}
