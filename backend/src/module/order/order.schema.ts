import { Document, SchemaTypes } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Product } from './../product/product.schema';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
  @Prop({
    type: [{ quantity: { type: Number }, product: { type: SchemaTypes.ObjectId, ref: 'Product' } }]
  })
  @ApiProperty()
  products: [{ product: Product; quantity: number; }];

  @Prop()
  @ApiProperty({ name: 'total_price' })
  totalPrice: number;

  @Prop()
  @ApiProperty({ name: 'state_id' })
  stateId: string;

  @Prop()
  @ApiProperty({ name: 'user_id' })
  userId: string;

  @Prop()
  @ApiProperty()
  createdAt: string;

  @Prop()
  @ApiProperty()
  updatedAt: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);