import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async create(data: CreateUserDto): Promise<User> {
        const newUser = new this.userModel(data);
        return await newUser.save();
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find()
    }

    async delete(_id: string): Promise<User> {
        const user = await this.userModel.findByIdAndRemove({_id})
        if (user) {
            return user 
        } else {
            throw new NotFoundException('User not found')
        }
    }

    async findOne(_id: string): Promise<User> {
        const user = await this.userModel.findById({_id})
        if (user) {
            return user 
        } else {
            throw new NotFoundException('User not found')
        }
    }

    async update(_id: string, data: CreateUserDto): Promise<User> {
        const user = await this.userModel.findByIdAndUpdate(_id, data, {new: true})
        if (user) {
            return user 
        } else {
            throw new NotFoundException('User not found')
        }
    }

    async findByUsername(username: string): Promise<User> {
        return await this.userModel.findOne({username})
    }
}
