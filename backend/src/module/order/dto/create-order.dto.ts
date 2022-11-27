import { ApiProperty } from "@nestjs/swagger";
import { OrderState } from './../../order-state/order-state.schema';
import { Product } from './../../product/product.schema';

export class CreateOrderDto {
    @ApiProperty()
    products: [
        {
            product: Product;
            quantity: number;
        }
    ];

    @ApiProperty()
    totalPrice: number;

    @ApiProperty()
    state: OrderState;
}