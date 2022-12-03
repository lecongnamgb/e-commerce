import { Document, SchemaTypes } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../product/product.schema';
import { User } from '../user/user.schema';

export type CartDocument = Cart & Document;

@Schema({ timestamps: true })
export class Cart {
  @Prop({
    type: [{ quantity: { type: Number }, product: { type: SchemaTypes.ObjectId, ref: 'Product' } }]
  })
  @ApiProperty()
  products: [{ product: Product; quantity: number; }];

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

export const CartSchema = SchemaFactory.createForClass(Cart);

CartSchema.pre(/^find/, function (next) {
  this.populate(["products.product", "user"]);
  next();
});