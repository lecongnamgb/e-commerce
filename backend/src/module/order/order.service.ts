import { ProductDocument } from './../product/product.schema';
import { Product } from 'src/module/product/product.schema';
import { StateOrder } from './enum/order-state.enum';
import { Shop, ShopDocument } from './../shop/shop.schema';
import { OrderState, OrderStateDocument } from './../order-state/order-state.schema';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './order.schema';
import { Cart, CartDocument } from '../cart/cart.schema';

@Injectable()
export class OrderService {
    constructor(
        @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
        @InjectModel(OrderState.name) private orderStateModel: Model<OrderStateDocument>,
        @InjectModel(Shop.name) private shopModel: Model<ShopDocument>,
        @InjectModel(Cart.name) private cartModel: Model<CartDocument>,
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    ) { }

    async create(userId: string) {
        const cart = await this.cartModel.findOne({ user: userId })
        if (!cart) {
            return {
                success: false,
                message: "Cart not found"
            }
        }
        let totalPrice = 0
        for (let item of cart.products) {
            const product = await this.productModel.findOne({ _id: item.product })
            if (!product) {
                return {
                    success: false,
                    message: "Product not found"
                }
            }
            if (product.quantityInInventory < item.quantity) {
                return {
                    success: false,
                    message: "Not enough product quantity"
                }
            }
            totalPrice += product.salePrice * item.quantity
        }

        for (let item of cart.products) {
            const product = await this.productModel.findOne({ _id: item.product })
            await this.productModel.update({ _id: product._id }, { quantityInInventory: product.quantityInInventory - item.quantity })
        }

        const state = await this.orderStateModel.findOne({ state: StateOrder.WAITING })
        const newOrder = new this.orderModel({
            user: userId,
            products: cart.products,
            totalPrice,
            state
        });
        await newOrder.save();
        await this.cartModel.deleteMany({ user: userId })
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

    async update(_id: string, data: UpdateOrderDto) {
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

    async getListOrderByStateId(_id: string, userId: string) {
        const orderState = await this.orderStateModel.findOne({ _id })
        if (!orderState) {
            return {
                success: false,
                data: [],
                message: "Order State not found"
            }
        }
        const order = await this.orderModel.find({ state: _id, user: userId })
        return {
            success: true,
            data: order
        }
    }

    async getListOrderByShopId(_id: string, userId: string) {
        const shop = await this.shopModel.findOne({ _id })
        if (!shop) {
            return {
                success: false,
                data: [],
                message: "Shop not found"
            }
        }

        const waiting = await this.orderStateModel.findOne({ state: StateOrder.WAITING })
        const delivering = await this.orderStateModel.findOne({ state: StateOrder.DELIVERING })
        const orderQuery = await this.orderModel.find({
            $and: [
                {
                    $or: [
                        { "state": waiting._id },
                        { "state": delivering._id }
                    ]
                },
                { "user": userId }
            ]
        })

        const order = []
        for (let i = 0; i < orderQuery.length; i++) {
            if (orderQuery[i].products.some(item => item.product.shop.name === shop.name)) {
                order.push(orderQuery[i])
            }
        }

        return {
            success: true,
            data: order
        }
    }

    async getListOrderByUserId(userId: string) {
        const list = await this.orderModel.find({user: userId})
        return {
            success: true,
            list
        }
    }
}
