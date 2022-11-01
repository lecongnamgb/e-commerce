import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    username: string;
    
    @ApiProperty()
    password: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    gender: string;

    @ApiProperty()
    dob: Date;

    @ApiProperty()
    phone_number: string;

    @ApiProperty()
    address: string;
}