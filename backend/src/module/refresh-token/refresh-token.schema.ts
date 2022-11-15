import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type RefreshTokenDocument = RefreshToken & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class RefreshToken {
  @Prop()
  @ApiProperty()
  refresh_token: string;

  @Prop()
  @ApiProperty()
  user_id: string;

  @Prop()
  @ApiProperty()
  created_at: string;

  @Prop()
  @ApiProperty()
  updated_at: string;
}

export const RefreshTokenSchema = SchemaFactory.createForClass(RefreshToken);