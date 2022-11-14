import { ShopService } from './../shop/shop.service';
import { OrderStateService } from './../order-state/order-state.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './order.schema';

@Injectable()
export class OrderService {
    constructor(
        @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
        private orderStateService: OrderStateService,
        private shopService: ShopService
    ) { }

    async create(data: CreateOrderDto): Promise<Order> {
        const orderState = await this.orderStateService.findOne(data.state_id)
        if (!orderState) {
            throw new NotFoundException('Order State not found')
        }
        const newOrder = new this.orderModel(data);
        return await newOrder.save();
    }

    async findAll(): Promise<Order[]> {
        return await this.orderModel.find()
    }

    async delete(_id: string): Promise<Order> {
        const order = await this.orderModel.findByIdAndRemove({ _id })
        if (order) {
            return order
        } else {
            throw new NotFoundException('Order not found')
        }
    }

    async findOne(_id: string): Promise<Order> {
        const order = await this.orderModel.findById({ _id })
        if (order) {
            return order
        } else {
            throw new NotFoundException('Order not found')
        }
    }

    async update(_id: string, data: CreateOrderDto): Promise<Order> {
        const order = await this.orderModel.findByIdAndUpdate(_id, data, { new: true })
        if (order) {
            return order
        } else {
            throw new NotFoundException('Order not found')
        }
    }

    async getListOrderByStateId(id: string, userId: string): Promise<Order[]> {
        const orderState = await this.orderStateService.findOne(id)
        if (!orderState) {
            throw new NotFoundException('Order State not found')
        }
        return await this.orderModel.find({ state_id: id, user_id: userId }).populate('products.product').exec()
    }

    async getByUserId(id: string) {
        return await this.orderModel.find({ user_id: id }).populate('products.product').sort({ created_at: 'desc' }).exec()
    }

    async getListOrderByShopId(id: string, userId: string): Promise<Order[]> {
        const shop = await this.shopService.findOne(id)
        if (!shop) {
            throw new NotFoundException('Shop not found')
        }

        const wait = await this.orderStateService.findByName('wait')
        const delivering = await this.orderStateService.findByName('delivering')
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
        
        return order
    }
}
