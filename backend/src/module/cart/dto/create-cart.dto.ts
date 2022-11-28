import { ApiProperty } from "@nestjs/swagger";
import { Product } from '../../product/product.schema';

export class CreateCartDto {
    @ApiProperty()
    products: [
        {
            product: Product;
            quantity: number;
        }
    ];
}