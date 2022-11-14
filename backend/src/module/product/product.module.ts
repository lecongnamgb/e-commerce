import { Product, ProductSchema } from './product.schema';

import { CategoryModule } from './../category/category.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderModule } from './../order/order.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ShopModule } from '../shop/shop.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    ShopModule,
    OrderModule,
    CategoryModule
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService]
})
export class ProductModule {}