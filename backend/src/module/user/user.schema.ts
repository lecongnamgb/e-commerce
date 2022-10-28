import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true})
export class User {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  gender: string;

  @Prop()
  dob: Date;

  @Prop()
  phone_number: string;

  @Prop()
  address: string;
}

export const UserSchema = SchemaFactory.createForClass(User);