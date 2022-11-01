import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type FeedBackDocument = FeedBack & Document;

@Schema({ timestamps: true})
export class FeedBack {
  @Prop()
  @ApiProperty()
  userId: string;

  @Prop()
  @ApiProperty()
  comment: string;

  @Prop()
  @ApiProperty()
  number_star: number;

  @Prop()
  @ApiProperty()
  productId: string;
}

export const FeedBackSchema = SchemaFactory.createForClass(FeedBack);