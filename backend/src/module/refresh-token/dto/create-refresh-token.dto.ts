import { ApiProperty } from "@nestjs/swagger";

export class CreateRefreshTokenDto {
    @ApiProperty()
    refreshToken: string;
}