import { ApiProperty } from "@nestjs/swagger";

export class CreateNotificationDto {
    @ApiProperty()
    content: string;
}