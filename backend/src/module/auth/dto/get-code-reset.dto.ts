import { ApiProperty } from "@nestjs/swagger";

export class GetCodeResetDto {
    @ApiProperty()
    email: string;
}