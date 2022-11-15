import { ApiProperty } from "@nestjs/swagger";

export class CreateNotificationDto {
    @ApiProperty()
    user_id: string;

    @ApiProperty()
    content: string;
}