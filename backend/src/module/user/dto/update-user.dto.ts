import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  dob: Date;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  address: string;
}