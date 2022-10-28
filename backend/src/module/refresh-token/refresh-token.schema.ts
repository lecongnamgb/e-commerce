import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type RefreshTokenDocument = RefreshToken & Document;

@Schema({ timestamps: true})
export class RefreshToken {
  @Prop()
  refreshToken: string;

  @Prop()
  userId: string;
}

export const RefreshTokenSchema = SchemaFactory.createForClass(RefreshToken);