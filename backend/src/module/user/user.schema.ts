import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class User {
  @Prop()
  @ApiProperty()
  username: string;

  @Prop()
  @ApiProperty()
  password: string;

  @Prop()
  @ApiProperty()
  name: string;

  @Prop()
  @ApiProperty()
  email: string;

  @Prop()
  @ApiProperty()
  gender: string;

  @Prop()
  @ApiProperty()
  dob: Date;

  @Prop()
  @ApiProperty()
  phone_number: string;

  @Prop()
  @ApiProperty()
  address: string;

  @Prop()
  @ApiProperty()
  favorite_product_ids: Array<string>

  @Prop()
  @ApiProperty()
  recently_view_product_ids: Array<string>

  @Prop()
  @ApiProperty()
  created_at: string;

  @Prop()
  @ApiProperty()
  updated_at: string;
}

export const UserSchema = SchemaFactory.createForClass(User);