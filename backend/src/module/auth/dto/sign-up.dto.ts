import { ApiProperty } from "@nestjs/swagger";

export class SignUpDto {
    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    re_password: string;

    @ApiProperty()
    email: string;
}