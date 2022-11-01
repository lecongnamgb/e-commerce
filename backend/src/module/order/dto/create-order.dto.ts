import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
    @ApiProperty()
    products: [
        {
            id: string;
            quantity: number;
        }
    ];

    @ApiProperty()
    totalPrice: number;

    @ApiProperty()
    state: string;

    @ApiProperty()
    userId: string;
}