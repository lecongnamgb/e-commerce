import { QueryProductDto } from './dto/query-product.dto';
import { Category, CategoryDocument } from './../category/category.schema';
import { Order, OrderDocument } from './../order/order.schema';
import { Shop, ShopDocument } from './../shop/shop.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './product.schema';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,
        @InjectModel(Shop.name) private shopModel: Model<ShopDocument>,
        @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
        @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
    ) { }

    async create(data: CreateProductDto) {
        const shop = await this.shopModel.findOne({ _id: data.shop_id })
        if (!shop) {
            return {
                success: false,
                data: [],
                message: "Shop not found"
            }
        }

        const category = await this.categoryModel.findOne({ _id: data.category_id })
        if (!category) {
            return {
                success: false,
                data: [],
                message: "Category not found"
            }
        }

        const newProduct = new this.productModel(data);
        await newProduct.save();
        return {
            success: true,
            data: newProduct
        }
    }

    async findAll(query: QueryProductDto) {
        const { search } = query
        const productQuery = this.productModel.find()
        if (search === 'date') {
            productQuery.sort({ created_at: 'desc' })
        } else if (search === 'quantity_sold') {
            productQuery.sort({ quantity_sold: 'desc' })
        } else if (query.search === 'price_desc') {
            productQuery.sort({ sale_price: 'desc' })
        } else if (search === 'price_asc') {
            productQuery.sort({ sale_price: 'asc' })
        }
        const product = await productQuery
        return {
            success: true,
            data: product
        }
    }

    async delete(_id: string) {
        const product = await this.productModel.findByIdAndRemove({ _id })
        if (product) {
            return {
                success: true
            }
        } else {
            return {
                success: false,
                data: [],
                message: "Product not found"
            }
        }
    }

    async findOne(_id: string) {
        const product = await this.productModel.findById({ _id })
        if (product) {
            return {
                success: true,
                data: product
            }
        } else {
            return {
                success: false,
                data: [],
                message: "Product not found"
            }
        }
    }

    async update(_id: string, data: CreateProductDto) {
        const product = await this.productModel.findByIdAndUpdate(_id, data, { new: true })
        if (product) {
            return {
                success: true
            }
        } else {
            return {
                success: false,
                data: [],
                message: "Product not found"
            }
        }
    }

    async getListProDuctByShopId(id: string, query: QueryProductDto) {
        const { search } = query
        const shop = await this.shopModel.findOne({ _id: id })
        if (!shop) {
            return {
                success: false,
                data: [],
                message: "Shop not found"
            }
        }
        const productQuery = this.productModel.find({ shop_id: id })
        if (search) {
            if (search === 'new') {
                productQuery.sort({ created_at: 'desc' })
            }
            if (search === 'sell') {
                productQuery.sort({ quantity_sold: 'desc' })
            }
        }
        const product = await productQuery
        return {
            success: true,
            data: product
        }
    }

    async getByUserId(id: string) {
        const order = await this.orderModel.find({ user_id: id }).populate('products.product').sort({ created_at: 'desc' }).exec()
        const product = []
        for (let i = 0; i < order.length; i++) {
            for (let j = 0; j < order[i].products.length; j++) {
                if (product.indexOf(order[i].products[j].product) === -1) {
                    product.push(order[i].products[j].product)
                    if (product.length === 10) {
                        return product
                    }
                }
            }
        }
        return {
            success: true,
            data: product
        }
    }
}
