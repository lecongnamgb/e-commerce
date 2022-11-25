import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type NotificationDocument = Notification & Document;

@Schema({ timestamps: true })
export class Notification {
  @Prop()
  @ApiProperty({ name: 'user_id' })
  userId: string;

  @Prop()
  @ApiProperty()
  content: string;

  @Prop()
  @ApiProperty()
  createdAt: string;

  @Prop()
  @ApiProperty()
  updatedAt: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);