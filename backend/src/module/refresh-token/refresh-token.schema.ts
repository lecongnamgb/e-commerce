import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type RefreshTokenDocument = RefreshToken & Document;

@Schema({ timestamps: true})
export class RefreshToken {
  @Prop()
  @ApiProperty()
  refreshToken: string;

  @Prop()
  @ApiProperty()
  userId: string;
}

export const RefreshTokenSchema = SchemaFactory.createForClass(RefreshToken);