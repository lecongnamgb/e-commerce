import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type FeedBackDocument = FeedBack & Document;

@Schema({ timestamps: true })
export class FeedBack {
  @Prop()
  @ApiProperty({ name: 'user_id' })
  userId: string;

  @Prop()
  @ApiProperty()
  comment: string;

  @Prop()
  @ApiProperty({ name: 'number_star' })
  numberStar: number;

  @Prop()
  @ApiProperty({ name: 'product_id' })
  productId: string;

  @Prop()
  @ApiProperty()
  createdAt: string;

  @Prop()
  @ApiProperty()
  updatedAt: string;
}

export const FeedBackSchema = SchemaFactory.createForClass(FeedBack);