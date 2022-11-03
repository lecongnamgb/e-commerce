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
  total_price: number;

  @Prop()
  @ApiProperty()
  state_id: string;

  @Prop()
  @ApiProperty()
  user_id: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);