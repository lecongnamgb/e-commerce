import { ApiProperty } from "@nestjs/swagger";

export class CreateNotificationDto {
    @ApiProperty()
    userId: string;
    
    @ApiProperty()
    content: string;
}