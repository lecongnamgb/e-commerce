import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderStateDto {
    @ApiProperty()
    state: string;
}