import { CreateCartDto } from './dto/create-cart.dto';
import { Shop, ShopDocument } from '../shop/shop.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cart, CartDocument } from './cart.schema';

@Injectable()
export class CartService {
    constructor(
        @InjectModel(Cart.name) private cartModel: Model<CartDocument>,
    ) { }

    async create(userId: string, data: CreateCartDto) {
        const cart = await this.cartModel.findOne({ user: userId })
        if (cart) {
            return {
                success: false,
                message: "Cart already exists"
            }
        }
        const newCart = new this.cartModel({
            user: userId,
            ...data
        });
        await newCart.save();
        return {
            success: true,
            data: newCart
        }
    }

    async findByUserId(userId: string) {
        const cart = await this.cartModel.find({ user: userId })
        if (cart) {
            return {
                success: true,
                data: cart
            }
        } else {
            return {
                success: false,
                data: [],
                message: "Cart not found"
            }
        }
    }

    async update(userId: string, data: CreateCartDto) {
        const cart = await this.cartModel.update({ user: userId }, data, { new: true })
        if (cart) {
            return {
                success: true
            }
        } else {
            return {
                success: false,
                data: [],
                message: "Cart not found"
            }
        }
    }
}
