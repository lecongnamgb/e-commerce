import { CreateShopDto } from './dto/create-shop.dto';
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Shop, ShopDocument } from './shop.schema';

@Injectable()
export class ShopService {
    constructor(@InjectModel(Shop.name) private shopModel: Model<ShopDocument>) { }

    async create(data: CreateShopDto): Promise<Shop> {
        const newShop = new this.shopModel(data);
        return await newShop.save();
    }

    async findAll(): Promise<Shop[]> {
        return await this.shopModel.find()
    }

    async delete(_id: string): Promise<Shop> {
        const shop = await this.shopModel.findByIdAndRemove({_id})
        if (shop) {
            return shop
        } else {
            throw new NotFoundException('Shop not found')
        }
    }

    async findOne(_id: string): Promise<Shop> {
        const shop = await this.shopModel.findById({_id})
        if (shop) {
            return shop
        } else {
            throw new NotFoundException('Shop not found')
        }
    }

    async update(_id: string, data: CreateShopDto): Promise<Shop> {
        const shop = await this.shopModel.findByIdAndUpdate(_id, data, {new: true})
        if (shop) {
            return shop
        } else {
            throw new NotFoundException('Shop not found')
        }
    }
}
