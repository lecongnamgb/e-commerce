import { ApiProperty } from "@nestjs/swagger";

export class CreateShopDto {
    @ApiProperty()
    avatarUrl: string;

    @ApiProperty()
    backgroundUrl: string;

    @ApiProperty()
    name: string;
}