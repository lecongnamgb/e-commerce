import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }})
export class Category {
  @Prop()
  @ApiProperty()
  name: string;

  @Prop()
  @ApiProperty()
  created_at: string;

  @Prop()
  @ApiProperty()
  updated_at: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);