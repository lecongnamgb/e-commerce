import { CreateOrderDto } from './dto/create-order.dto';
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './order.schema';

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) { }

    async create(data: CreateOrderDto): Promise<Order> {
        const newOrder = new this.orderModel(data);
        return await newOrder.save();
    }

    async findAll(): Promise<Order[]> {
        return await this.orderModel.find()
    }

    async delete(_id: string): Promise<Order> {
        const order = await this.orderModel.findByIdAndRemove({_id})
        if (order) {
            return order
        } else {
            throw new NotFoundException('Order not found')
        }
    }

    async findOne(_id: string): Promise<Order> {
        const order = await this.orderModel.findById({_id})
        if (order) {
            return order
        } else {
            throw new NotFoundException('Order not found')
        }
    }

    async update(_id: string, data: CreateOrderDto): Promise<Order> {
        const order = await this.orderModel.findByIdAndUpdate(_id, data, {new: true})
        if (order) {
            return order
        } else {
            throw new NotFoundException('Order not found')
        }
    }
}
