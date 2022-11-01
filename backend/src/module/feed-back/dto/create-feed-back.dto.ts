import { ApiProperty } from "@nestjs/swagger";

export class CreateFeedBackDto {
    @ApiProperty()
    userId: string;

    @ApiProperty()
    comment: string;

    @ApiProperty()
    number_star: number;

    @ApiProperty()
    productId: string;
}