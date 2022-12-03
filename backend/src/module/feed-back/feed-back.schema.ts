import { Document, SchemaTypes } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Product } from './../product/product.schema';
import { User } from '../user/user.schema';

export type FeedBackDocument = FeedBack & Document;

@Schema({ timestamps: true })
export class FeedBack {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
  @ApiProperty()
  user: User;

  @Prop()
  @ApiProperty()
  comment: string;

  @Prop()
  @ApiProperty({ name: 'number_star' })
  numberStar: number;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Product' })
  @ApiProperty()
  product: Product;

  @Prop()
  @ApiProperty()
  createdAt: string;

  @Prop()
  @ApiProperty()
  updatedAt: string;
}

export const FeedBackSchema = SchemaFactory.createForClass(FeedBack);

FeedBackSchema.pre(/^find/, function (next) {
  this.populate(["product", "user"]);
  next();
});