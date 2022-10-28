import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop()
  name: string;
  
  @Prop()
  category_id: string;

  @Prop()
  description: string;

  @Prop()
  standard_price: number;

  @Prop()
  sale_percent: number;

  @Prop()
  sale_price: number;
  
  @Prop()
  shop_id: string;
  
  @Prop()
  total_rating_star: number;
  
  @Prop()
  quantity_sold: number;

  @Prop()
  quantity_in_inventory: number;

  @Prop()
  avatar: string;
  
  @Prop()
  img: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);