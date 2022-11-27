import { TypeSearchProduct } from './enum/type-search-product.enum';
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
        const shop = await this.shopModel.findOne({ _id: data.shop })
        if (!shop) {
            return {
                success: false,
                data: [],
                message: "Shop not found"
            }
        }

        const category = await this.categoryModel.findOne({ _id: data.category })
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
        if (search === TypeSearchProduct.DATE) {
            productQuery.sort({ createdAt: 'desc' })
        } else if (search === TypeSearchProduct.QUANTITY_SOLD) {
            productQuery.sort({ quantitySold: 'desc' })
        } else if (query.search === TypeSearchProduct.PRICE_DESC) {
            productQuery.sort({ salePrice: 'desc' })
        } else if (search === TypeSearchProduct.PRICE_ASC) {
            productQuery.sort({ salePrice: 'asc' })
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

    async getListProDuctByShopId(_id: string, query: QueryProductDto) {
        const { search } = query
        const shop = await this.shopModel.findOne({ _id })
        if (!shop) {
            return {
                success: false,
                data: [],
                message: "Shop not found"
            }
        }
        const productQuery = this.productModel.find({ shop: _id })
        if (search) {
            if (search === 'new') {
                productQuery.sort({ createdAt: 'desc' })
            }
            if (search === 'sell') {
                productQuery.sort({ quantitySold: 'desc' })
            }
        }
        const product = await productQuery
        return {
            success: true,
            data: product
        }
    }

    async getByUserId(userId: string) {
        const order = await this.orderModel.find({ user: userId }).sort({ createdAt: 'desc' })
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
