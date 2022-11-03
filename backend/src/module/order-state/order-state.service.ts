import { CreateOrderStateDto } from './dto/create-order-state.dto';
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OrderState, OrderStateDocument } from './order-state.schema';

@Injectable()
export class OrderStateService {
    constructor(@InjectModel(OrderState.name) private orderStateModel: Model<OrderStateDocument>) { }

    async create(data: CreateOrderStateDto): Promise<OrderState> {
        const newOrderState = new this.orderStateModel(data);
        console.log(newOrderState)
        return await newOrderState.save();
    }

    async findAll(): Promise<OrderState[]> {
        return await this.orderStateModel.find()
    }

    async delete(_id: string): Promise<OrderState> {
        const orderState = await this.orderStateModel.findByIdAndRemove({_id})
        if (orderState) {
            return orderState
        } else {
            throw new NotFoundException('OrderState not found')
        }
    }

    async findOne(_id: string): Promise<OrderState> {
        const orderState = await this.orderStateModel.findById({_id})
        if (orderState) {
            return orderState
        } else {
            throw new NotFoundException('OrderState not found')
        }
    }

    async update(_id: string, data: CreateOrderStateDto): Promise<OrderState> {
        const orderState = await this.orderStateModel.findByIdAndUpdate(_id, data, {new: true})
        if (orderState) {
            return orderState
        } else {
            throw new NotFoundException('OrderState not found')
        }
    }
}
