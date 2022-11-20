import { ApiProperty } from "@nestjs/swagger";

export class ChangePassWordDto {
    @ApiProperty()
    password: string;

    @ApiProperty()
    old_password: string;
}