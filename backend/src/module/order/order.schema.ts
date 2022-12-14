import { Document, SchemaTypes } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { OrderState } from '../order-state/order-state.schema';
import { Product } from './../product/product.schema';
import { User } from '../user/user.schema';

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

  @Prop({ type: SchemaTypes.ObjectId, ref: 'OrderState' })
  @ApiProperty()
  state: OrderState;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
  @ApiProperty()
  user: User;

  @Prop()
  @ApiProperty()
  createdAt: string;

  @Prop()
  @ApiProperty()
  updatedAt: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

OrderSchema.pre(/^find/, function (next) {
  this.populate(["products.product", "state", "user"]);
  next();
});