import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type FeedBackDocument = FeedBack & Document;

@Schema({ timestamps: true})
export class FeedBack {
  @Prop()
  @ApiProperty()
  user_id: string;

  @Prop()
  @ApiProperty()
  comment: string;

  @Prop()
  @ApiProperty()
  number_star: number;

  @Prop()
  @ApiProperty()
  product_id: string;

  @Prop()
  @ApiProperty()
  createdAt: string;

  @Prop()
  @ApiProperty()
  updatedAt: string;
}

export const FeedBackSchema = SchemaFactory.createForClass(FeedBack);