import { ApiProperty } from "@nestjs/swagger";

export class CreateFeedBackDto {
    @ApiProperty()
    user_id: string;

    @ApiProperty()
    comment: string;

    @ApiProperty()
    number_star: number;

    @ApiProperty()
    product_id: string;
}