import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true})
export class Order {
  @Prop()
  @ApiProperty({
    type:[{quantity:{type: Number}, id:{type:String}}]
  })
  products: [{ quantity: number; id: string; }];

  @Prop()
  @ApiProperty()
  totalPrice: number;

  @Prop()
  @ApiProperty()
  state: string;

  @Prop()
  @ApiProperty()
  userId: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);