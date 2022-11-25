import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    categoryId: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    standardPrice: number;

    @ApiProperty()
    salePercent: number;

    @ApiProperty()
    salePrice: number;

    @ApiProperty()
    shopId: string;

    @ApiProperty()
    totalRatingStar: number;

    @ApiProperty()
    quantitySold: number;

    @ApiProperty()
    quantityInInventory: number;

    @ApiProperty()
    avatar: string;

    @ApiProperty()
    img: string[];
}