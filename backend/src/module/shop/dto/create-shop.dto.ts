import { ApiProperty } from "@nestjs/swagger";

export class CreateShopDto {
    @ApiProperty()
    avatar_url: string;

    @ApiProperty()
    background_url: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    ownerId: string;
}