import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema({ timestamps: true})
export class Category {
  @Prop()
  @ApiProperty()
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);