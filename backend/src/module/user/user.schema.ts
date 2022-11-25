import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
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
  @ApiProperty({ name: 'phone_number' })
  phoneNumber: string;

  @Prop()
  @ApiProperty()
  address: string;

  @Prop()
  @ApiProperty({ name: 'favorite_product_ids' })
  favoriteProductIds: Array<string>

  @Prop()
  @ApiProperty({ name: 'recently_view_product_ids' })
  recentlyViewProductIds: Array<string>

  @Prop()
  @ApiProperty()
  codeReset: string;

  @Prop()
  @ApiProperty()
  createdAt: string;

  @Prop()
  @ApiProperty()
  updatedAt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);