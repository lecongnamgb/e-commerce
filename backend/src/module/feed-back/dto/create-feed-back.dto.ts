import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/module/product/product.schema";

export class CreateFeedBackDto {
    @ApiProperty()
    comment: string;

    @ApiProperty()
    numberStar: number;

    @ApiProperty()
    product: Product;
}