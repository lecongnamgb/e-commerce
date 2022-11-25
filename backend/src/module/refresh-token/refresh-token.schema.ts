import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type RefreshTokenDocument = RefreshToken & Document;

@Schema({ timestamps: true })
export class RefreshToken {
  @Prop()
  @ApiProperty({name: 'refresh_token'})
  refreshToken: string;

  @Prop()
  @ApiProperty({name: 'user_id'})
  userId: string;

  @Prop()
  @ApiProperty()
  createdAt: string;

  @Prop()
  @ApiProperty()
  updatedAt: string;
}

export const RefreshTokenSchema = SchemaFactory.createForClass(RefreshToken);