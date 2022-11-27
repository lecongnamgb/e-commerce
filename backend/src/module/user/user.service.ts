import { UpdateUserDto } from './dto/update-user.dto';
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

    async findById(_id: string) {
        return await this.userModel.findById({ _id })
    }

    async findByUsername(username: string) {
        return await this.userModel.findOne({ username })
    }

    async findByEmail(email: string) {
        return await this.userModel.findOne({ email })
    }

    async getCountProductLike(id: string) {
        const user = await this.findById(id)
        return {
            success: true,
            data: {
                total: user.favoriteProductIds.length
            }
        }
    }

    async updatePassword(_id: string, password: string) {
        return await this.userModel.findByIdAndUpdate(_id, { password }, { new: true })
    }

    async updateCodeReset(_id: string, codeReset: string) {
        return await this.userModel.findByIdAndUpdate(_id, { codeReset }, { new: true })
    }

    async findAll() {
        const user = await this.userModel.find({}, {password: 0})
        return {
            success: true,
            data: user
        }
    }

    async delete(_id: string) {
        const user = await this.userModel.findByIdAndRemove({ _id })
        if (user) {
            return {
                success: true
            }
        } else {
            return {
                success: false,
                data: [],
                message: "User not found"
            }
        }
    }

    async findOne(_id: string) {
        const user = await this.userModel.findById({ _id }, {password: 0})
        if (user) {
            return {
                success: true,
                data: user
            }
        } else {
            return {
                success: false,
                data: [],
                message: "User not found"
            }
        }
    }

    async update(_id: string, data: UpdateUserDto) {
        const user = await this.userModel.findByIdAndUpdate(_id, data, { new: true })
        if (user) {
            return {
                success: true
            }
        } else {
            return {
                success: false,
                data: [],
                message: "User not found"
            }
        }
    }
}
