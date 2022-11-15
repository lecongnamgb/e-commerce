import { Document, SchemaTypes } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Product } from './../product/product.schema';

export type OrderDocument = Order & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Order {
  @Prop({
    type: [{ quantity: { type: Number }, product: { type: SchemaTypes.ObjectId, ref: 'Product' } }]
  })
  @ApiProperty()
  products: [{ product: Product; quantity: number; }];

  @Prop()
  @ApiProperty()
  total_price: number;

  @Prop()
  @ApiProperty()
  state_id: string;

  @Prop()
  @ApiProperty()
  user_id: string;

  @Prop()
  @ApiProperty()
  created_at: string;

  @Prop()
  @ApiProperty()
  updated_at: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);