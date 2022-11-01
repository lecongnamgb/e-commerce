import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    category_id: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    standard_price: number;

    @ApiProperty()
    sale_percent: number;

    @ApiProperty()
    sale_price: number;

    @ApiProperty()
    shop_id: string;

    @ApiProperty()
    total_rating_star: number;

    @ApiProperty()
    quantity_sold: number;

    @ApiProperty()
    quantity_in_inventory: number;

    @ApiProperty()
    avatar: string;

    @ApiProperty()
    img: string[];
}