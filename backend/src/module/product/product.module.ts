import { Category, CategorySchema } from './../category/category.schema';
import { Order, OrderSchema } from './../order/order.schema';
import { Product, ProductSchema } from './product.schema';
import { Shop, ShopSchema } from './../shop/shop.schema';

import { CategoryModule } from './../category/category.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderModule } from './../order/order.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ShopModule } from '../shop/shop.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: Shop.name, schema: ShopSchema },
      { name: Order.name, schema: OrderSchema },
      { name: Category.name, schema: CategorySchema }
    ]),
    ShopModule,
    OrderModule,
    CategoryModule
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService]
})
export class ProductModule { }