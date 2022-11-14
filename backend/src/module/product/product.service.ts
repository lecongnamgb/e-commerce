import { CategoryService } from './../category/category.service';
import { OrderService } from './../order/order.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './product.schema';
import { ShopService } from '../shop/shop.service';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,
        private shopService: ShopService,
        private orderService: OrderService,
        private categoryService: CategoryService
    ) { }

    async create(data: CreateProductDto): Promise<Product> {
        const shop = await this.shopService.findOne(data.shop_id)
        if (!shop) {
            throw new NotFoundException('Shop not found')
        }

        const category = await this.categoryService.findOne(data.category_id)
        if (!category) {
            throw new NotFoundException('Category not found')
        }

        const newProduct = new this.productModel(data);
        return await newProduct.save();
    }

    async findAll(query): Promise<Product[]> {
        const { search } = query
        const productQuery = this.productModel.find()
        if (search === 'date') {
            return await productQuery.sort({ created_at: 'desc' })
        } else if (search === 'quantity_sold') {
            return await productQuery.sort({ quantity_sold: 'desc' })
        } else if (query.search === 'price_desc') {
            return await productQuery.sort({ sale_price: 'desc' })
        } else if (search === 'price_asc') {
            return await productQuery.sort({ sale_price: 'asc' })
        }
    }

    async delete(_id: string): Promise<Product> {
        const product = await this.productModel.findByIdAndRemove({ _id })
        if (product) {
            return product
        } else {
            throw new NotFoundException('Product not found')
        }
    }

    async findOne(_id: string): Promise<Product> {
        const product = await this.productModel.findById({ _id })
        if (product) {
            return product
        } else {
            throw new NotFoundException('Product not found')
        }
    }

    async update(_id: string, data: CreateProductDto): Promise<Product> {
        const product = await this.productModel.findByIdAndUpdate(_id, data, { new: true })
        if (product) {
            return product
        } else {
            throw new NotFoundException('Product not found')
        }
    }

    async getListProDuctByShopId(id: string, query): Promise<Product[]> {
        const { search } = query
        const shop = await this.shopService.findOne(id)
        if (!shop) {
            throw new NotFoundException('Shop not found')
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
        return await productQuery
    }

    async getByUserId(id: string): Promise<Product[]> {
        const order = await this.orderService.getByUserId(id)
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
        return product
    }
}
