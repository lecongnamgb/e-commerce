import { Order, OrderSchema } from './order.schema';
import { OrderState, OrderStateSchema } from './../order-state/order-state.schema';
import { Shop, ShopSchema } from './../shop/shop.schema';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Order.name, schema: OrderSchema },
      { name: OrderState.name, schema: OrderStateSchema },
      { name: Shop.name, schema: ShopSchema },
    ])
  ],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService]
})
export class OrderModule { }