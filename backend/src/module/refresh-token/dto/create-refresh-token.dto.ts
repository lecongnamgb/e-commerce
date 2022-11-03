import { ApiProperty } from "@nestjs/swagger";

export class CreateRefreshTokenDto {
    @ApiProperty()
    refresh_token: string;

    @ApiProperty()
    user_id: string;
}