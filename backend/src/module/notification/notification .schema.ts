import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type NotificationDocument = Notification & Document;

@Schema({ timestamps: true})
export class Notification {
  @Prop()
  @ApiProperty()
  user_id: string;

  @Prop()
  @ApiProperty()
  content: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);