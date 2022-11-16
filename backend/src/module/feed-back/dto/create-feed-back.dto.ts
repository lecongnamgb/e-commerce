import { ApiProperty } from "@nestjs/swagger";

export class CreateFeedBackDto {
    @ApiProperty()
    comment: string;

    @ApiProperty()
    number_star: number;

    @ApiProperty()
    product_id: string;
}