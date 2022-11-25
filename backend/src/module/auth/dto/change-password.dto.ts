import { ApiProperty } from "@nestjs/swagger";

export class ChangePassWordDto {
    @ApiProperty()
    password: string;

    @ApiProperty()
    oldPassword: string;
}