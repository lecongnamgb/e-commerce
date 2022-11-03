import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true})
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
}

export const UserSchema = SchemaFactory.createForClass(User);