import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type NotificationDocument = Notification & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }})
export class Notification {
  @Prop()
  @ApiProperty()
  user_id: string;

  @Prop()
  @ApiProperty()
  content: string;

  @Prop()
  @ApiProperty()
  created_at: string;

  @Prop()
  @ApiProperty()
  updated_at: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);