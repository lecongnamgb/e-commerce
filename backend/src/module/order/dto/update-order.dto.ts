import { ApiProperty } from "@nestjs/swagger";
import { OrderState } from '../../order-state/order-state.schema';
import { Product } from '../../product/product.schema';

export class UpdateOrderDto {
    @ApiProperty()
    state: OrderState;
}