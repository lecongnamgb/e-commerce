import { CreateOrderStateDto } from './dto/create-order-state.dto';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OrderState, OrderStateDocument } from './order-state.schema';

@Injectable()
export class OrderStateService {
    constructor(@InjectModel(OrderState.name) private orderStateModel: Model<OrderStateDocument>) { }

    async create(data: CreateOrderStateDto) {
        const newOrderState = new this.orderStateModel(data);
        await newOrderState.save();
        return {
            success: true,
            data: newOrderState
        }
    }

    async findAll() {
        const orderState = await this.orderStateModel.find()
        return {
            success: true,
            data: orderState
        }
    }

    async delete(_id: string) {
        const orderState = await this.orderStateModel.findByIdAndRemove({ _id })
        if (orderState) {
            return {
                success: true
            }
        } else {
            return {
                success: false,
                data: [],
                message: "Order State not found"
            }
        }
    }

    async findOne(_id: string) {
        const orderState = await this.orderStateModel.findById({ _id })
        if (orderState) {
            return {
                success: true,
                data: orderState
            }
        } else {
            return {
                success: false,
                data: [],
                message: "Order State not found"
            }
        }
    }

    async update(_id: string, data: CreateOrderStateDto) {
        const orderState = await this.orderStateModel.findByIdAndUpdate(_id, data, { new: true })
        if (orderState) {
            return {
                success: true
            }
        } else {
            return {
                success: false,
                data: [],
                message: "Order State not found"
            }
        }
    }
}
