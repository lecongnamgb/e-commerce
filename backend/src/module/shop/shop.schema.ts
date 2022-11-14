import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type ShopDocument = Shop & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }})
export class Shop {
  @Prop()
  @ApiProperty()
  avatar_url: string;

  @Prop()
  @ApiProperty()
  background_url: string;

  @Prop()
  @ApiProperty()
  name: string;

  @Prop()
  @ApiProperty()
  user_id: string;

  @Prop()
  @ApiProperty()
  total_rating: number; 

  @Prop()
  @ApiProperty()
  created_at: string;

  @Prop()
  @ApiProperty()
  updated_at: string;
}

export const ShopSchema = SchemaFactory.createForClass(Shop);