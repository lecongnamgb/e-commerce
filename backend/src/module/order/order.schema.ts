import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true})
export class Order {
  @Prop({
    type:[{quantity:{type: Number}, id:{type:String}}]
  })
  products: { quantity: number; id: string }[];

  @Prop()
  totalPrice: number;

  @Prop()
  state: string;

  @Prop()
  userId: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);