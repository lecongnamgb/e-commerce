import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type ShopDocument = Shop & Document;

@Schema({ timestamps: true})
export class Shop {
  @Prop()
  avatar_url: string;

  @Prop()
  background_url: string;

  @Prop()
  name: string;

  @Prop()
  ownerId: string;
}

export const ShopSchema = SchemaFactory.createForClass(Shop);