import { ApiProperty } from "@nestjs/swagger";

export class QueryProductDto {
    @ApiProperty()
    search: string;
}