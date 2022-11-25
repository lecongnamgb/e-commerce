import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop()
  @ApiProperty()
  name: string;

  @Prop()
  @ApiProperty({name: 'category_id'})
  categoryId: string;

  @Prop()
  @ApiProperty()
  description: string;

  @Prop()
  @ApiProperty({name: 'standard_price'})
  standardPrice: number;

  @Prop()
  @ApiProperty({name: 'sale_percent'})
  salePercent: number;

  @Prop()
  @ApiProperty({name: 'sale_price'})
  salePrice: number;

  @Prop()
  @ApiProperty({name: 'shop_id'})
  shopId: string;

  @Prop()
  @ApiProperty({name: 'total_rating_star'})
  totalRatingStar: number;

  @Prop()
  @ApiProperty({name: 'quantity_sold'})
  quantitySold: number;

  @Prop()
  @ApiProperty({name: 'quantity_in_inventory'})
  quantityInInventory: number;

  @Prop()
  @ApiProperty()
  avatar: string;

  @Prop()
  @ApiProperty()
  img: string[];

  @Prop()
  @ApiProperty()
  createdAt: string;

  @Prop()
  @ApiProperty()
  updatedAt: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);