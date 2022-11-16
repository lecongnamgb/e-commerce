import { Shop, ShopDocument } from './../shop/shop.schema';
import { OrderState, OrderStateDocument } from './../order-state/order-state.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './order.schema';

@Injectable()
export class OrderService {
    constructor(
        @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
        @InjectModel(OrderState.name) private orderStateModel: Model<OrderStateDocument>,
        @InjectModel(Shop.name) private shopModel: Model<ShopDocument>,
    ) { }

    async create(userId: string, data: CreateOrderDto) {
        const orderState = await this.orderStateModel.findOne({ _id: data.state_id })
        if (!orderState) {
            return {
                success: false,
                data: [],
                message: "Order State not found"
            }
        }
        const newOrder = new this.orderModel({
            user_id: userId,
            ...data
        });
        await newOrder.save();
        return {
            success: true,
            data: newOrder
        }
    }

    async findAll() {
        const order = await this.orderModel.find()
        return {
            success: true,
            data: order
        }
    }

    async delete(_id: string) {
        const order = await this.orderModel.findByIdAndRemove({ _id })
        if (order) {
            return {
                success: true
            }
        } else {
            return {
                success: false,
                data: [],
                message: "Order not found"
            }
        }
    }

    async findOne(_id: string) {
        const order = await this.orderModel.findById({ _id })
        if (order) {
            return {
                success: true,
                data: order
            }
        } else {
            return {
                success: false,
                data: [],
                message: "Order not found"
            }
        }
    }

    async update(_id: string, data: CreateOrderDto) {
        const order = await this.orderModel.findByIdAndUpdate(_id, data, { new: true })
        if (order) {
            return {
                success: true
            }
        } else {
            return {
                success: false,
                data: [],
                message: "Order not found"
            }
        }
    }

    async getListOrderByStateId(id: string, userId: string) {
        const orderState = await this.orderStateModel.findOne({ _id: id })
        if (!orderState) {
            return {
                success: false,
                data: [],
                message: "Order State not found"
            }
        }
        const order = await this.orderModel.find({ state_id: id, user_id: userId }).populate('products.product').exec()
        return {
            success: true,
            data: order
        }
    }

    async getListOrderByShopId(id: string, userId: string) {
        const shop = await this.shopModel.findOne({ _id: id })
        if (!shop) {
            return {
                success: false,
                data: [],
                message: "Shop not found"
            }
        }

        const wait = await this.orderStateModel.findOne({ state: 'wait' })
        const delivering = await this.orderStateModel.findOne({ state: 'delivering' })
        const orderQuery = await this.orderModel.find({
            $and: [
                {
                    $or: [
                        { "state_id": wait._id },
                        { "state_id": delivering._id }
                    ]
                },
                { "user_id": userId }
            ]
        })
            .populate('products.product').exec()

        const order = []
        for (let i = 0; i < orderQuery.length; i++) {
            if (orderQuery[i].products.some(item => item.product.shop_id === id)) {
                order.push(orderQuery[i])
            }
        }

        return {
            success: true,
            data: order
        }
    }
}
