import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type NotificationDocument = Notification & Document;

@Schema({ timestamps: true})
export class Notification {
  @Prop()
  userId: string;

  @Prop()
  content: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);