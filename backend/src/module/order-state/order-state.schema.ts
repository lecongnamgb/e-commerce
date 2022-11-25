import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type OrderStateDocument = OrderState & Document;

@Schema({ timestamps: true })
export class OrderState {
  @Prop()
  @ApiProperty()
  state: string;

  @Prop()
  @ApiProperty()
  createdAt: string;

  @Prop()
  @ApiProperty()
  updatedAt: string;
}

export const OrderStateSchema = SchemaFactory.createForClass(OrderState);