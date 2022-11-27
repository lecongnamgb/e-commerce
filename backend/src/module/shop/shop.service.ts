import { CreateShopDto } from './dto/create-shop.dto';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Shop, ShopDocument } from './shop.schema';

@Injectable()
export class ShopService {
    constructor(@InjectModel(Shop.name) private shopModel: Model<ShopDocument>) { }

    async create(userId: string, data: CreateShopDto) {
        const newShop = new this.shopModel({
            owner: userId,
            ...data
        });
        await newShop.save();
        return {
            success: true,
            data: newShop
        }
    }

    async findAll() {
        const shop = await this.shopModel.find()
        return {
            success: true,
            data: shop
        }
    }

    async delete(_id: string) {
        const shop = await this.shopModel.findByIdAndRemove({ _id })
        if (shop) {
            return {
                success: true
            }
        } else {
            return {
                success: false,
                data: [],
                message: "Shop not found"
            }
        }
    }

    async findOne(_id: string) {
        const shop = await this.shopModel.findById({ _id })
        if (shop) {
            return {
                success: true,
                data: shop
            }
        } else {
            return {
                success: false,
                data: [],
                message: "Shop not found"
            }
        }
    }

    async update(_id: string, data: CreateShopDto) {
        const shop = await this.shopModel.findByIdAndUpdate(_id, data, { new: true })
        if (shop) {
            return {
                success: true
            }
        } else {
            return {
                success: false,
                data: [],
                message: "Shop not found"
            }
        }
    }
}
