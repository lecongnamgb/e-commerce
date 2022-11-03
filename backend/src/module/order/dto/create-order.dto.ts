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
    total_price: number;

    @ApiProperty()
    state_id: string;

    @ApiProperty()
    user_id: string;
}