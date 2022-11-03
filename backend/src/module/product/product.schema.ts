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
  @ApiProperty()
  category_id: string;

  @Prop()
  @ApiProperty()
  description: string;

  @Prop()
  @ApiProperty()
  standard_price: number;

  @Prop()
  @ApiProperty()
  sale_percent: number;

  @Prop()
  @ApiProperty()
  sale_price: number;
  
  @Prop()
  @ApiProperty()
  shop_id: string;
  
  @Prop()
  @ApiProperty()
  total_rating_star: number;
  
  @Prop()
  @ApiProperty()
  quantity_sold: number;

  @Prop()
  @ApiProperty()
  quantity_in_inventory: number;

  @Prop()
  @ApiProperty()
  avatar: string;
  
  @Prop()
  @ApiProperty()
  img: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);