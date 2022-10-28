import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type FeedBackDocument = FeedBack & Document;

@Schema({ timestamps: true})
export class FeedBack {
  @Prop()
  userId: string;

  @Prop()
  comment: string;

  @Prop()
  number_star: number;

  @Prop()
  productId: string;
}

export const FeedBackSchema = SchemaFactory.createForClass(FeedBack);