import { ApiProperty } from "@nestjs/swagger";

export class CreateFeedBackDto {
    @ApiProperty()
    comment: string;

    @ApiProperty()
    numberStar: number;

    @ApiProperty()
    productId: string;
}