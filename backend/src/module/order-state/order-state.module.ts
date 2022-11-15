import { OrderState, OrderStateSchema } from './order-state.schema';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderStateController } from './order-state.controller';
import { OrderStateService } from './order-state.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: OrderState.name, schema: OrderStateSchema }])],
  controllers: [OrderStateController],
  providers: [OrderStateService],
  exports: [OrderStateService]
})
export class OrderStateModule { }