import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type ShopDocument = Shop & Document;

@Schema({ timestamps: true })
export class Shop {
  @Prop()
  @ApiProperty({ name: 'avatar_url' })
  avatarUrl: string;

  @Prop()
  @ApiProperty({ name: 'background_url' })
  backgroundUrl: string;

  @Prop()
  @ApiProperty()
  name: string;

  @Prop()
  @ApiProperty({ name: 'user_id' })
  userId: string;

  @Prop()
  @ApiProperty({ name: 'total_rating' })
  totalRating: number;

  @Prop()
  @ApiProperty()
  createdAt: string;

  @Prop()
  @ApiProperty()
  updatedAt: string;
}

export const ShopSchema = SchemaFactory.createForClass(Shop);