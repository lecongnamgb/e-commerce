import { ApiProperty } from "@nestjs/swagger";
import { Category } from './../../category/category.schema';
import { Shop } from "src/module/shop/shop.schema";

export class CreateProductDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    category: Category;

    @ApiProperty()
    description: string;

    @ApiProperty()
    standardPrice: number;

    @ApiProperty()
    salePercent: number;

    @ApiProperty()
    salePrice: number;

    @ApiProperty()
    shop: Shop;

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

    @ApiProperty()
    location: string;
}