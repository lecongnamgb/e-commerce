import { Document, SchemaTypes } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Category } from './../category/category.schema';
import { Shop } from '../shop/shop.schema';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop()
  @ApiProperty()
  name: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Category' })
  @ApiProperty()
  category: Category;

  @Prop()
  @ApiProperty()
  description: string;

  @Prop()
  @ApiProperty({ name: 'standard_price' })
  standardPrice: number;

  @Prop()
  @ApiProperty({ name: 'sale_percent' })
  salePercent: number;

  @Prop()
  @ApiProperty({ name: 'sale_price' })
  salePrice: number;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Shop' })
  @ApiProperty()
  shop: Shop;

  @Prop()
  @ApiProperty({ name: 'total_rating_star' })
  totalRatingStar: number;

  @Prop()
  @ApiProperty({ name: 'quantity_sold' })
  quantitySold: number;

  @Prop()
  @ApiProperty({ name: 'quantity_in_inventory' })
  quantityInInventory: number;

  @Prop()
  @ApiProperty()
  avatar: string;

  @Prop()
  @ApiProperty()
  img: string[];

  @Prop()
  @ApiProperty()
  location: string;

  @Prop()
  @ApiProperty()
  createdAt: string;

  @Prop()
  @ApiProperty()
  updatedAt: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.pre(/^find/, function (next) {
  this.populate(["category", "shop"]);
  next();
});