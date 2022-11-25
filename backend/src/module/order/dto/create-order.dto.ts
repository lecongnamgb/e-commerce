import { ApiProperty } from "@nestjs/swagger";
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
    stateId: string;
}