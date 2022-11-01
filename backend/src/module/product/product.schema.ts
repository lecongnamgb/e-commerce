import { Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @ApiProperty()
  name: string;
  
  @ApiProperty()
  category_id: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  standard_price: number;

  @ApiProperty()
  sale_percent: number;

  @ApiProperty()
  sale_price: number;
  
  @ApiProperty()
  shop_id: string;
  
  @ApiProperty()
  total_rating_star: number;
  
  @ApiProperty()
  quantity_sold: number;

  @ApiProperty()
  quantity_in_inventory: number;

  @ApiProperty()
  avatar: string;
  
  @ApiProperty()
  img: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);