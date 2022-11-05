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
        private shopService: ShopService
    ) { }

    async create(data: CreateProductDto): Promise<Product> {
        const newProduct = new this.productModel(data);
        return await newProduct.save();
    }

    async findAll(): Promise<Product[]> {
        return await this.productModel.find()
    }

    async delete(_id: string): Promise<Product> {
        const product = await this.productModel.findByIdAndRemove({_id})
        if (product) {
            return product
        } else {
            throw new NotFoundException('Product not found')
        }
    }

    async findOne(_id: string): Promise<Product> {
        const product = await this.productModel.findById({_id})
        if (product) {
            return product
        } else {
            throw new NotFoundException('Product not found')
        }
    }

    async update(_id: string, data: CreateProductDto): Promise<Product> {
        const product = await this.productModel.findByIdAndUpdate(_id, data, {new: true})
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
        const productQuery = this.productModel.find({shop_id: id})
        if (search) {
            if (search === 'new') {
                productQuery.sort({createdAt: 'desc'})
            }
            if (search === 'sell') {
                productQuery.sort({quantity_sold: 'desc'})
            }
        }
        return await productQuery
    }
}
