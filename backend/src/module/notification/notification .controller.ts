import { CreateNotificationDto } from './dto/create-notification .dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { Notification } from './notification .schema';
import { NotificationService } from './notification .service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('notification')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService) { }
    @Post()
    @ApiBody({type: CreateNotificationDto})
    @ApiResponse({type: Notification})
    @ApiTags('Create notification')
    async create(@Body() data: CreateNotificationDto): Promise<Notification> {
        return await this.notificationService.create(data)
    }

    @Get(':id')
    @ApiResponse({type: Notification})
    @ApiTags('Get notification by id')
    async findOne(@Param('id') id: string): Promise<Notification> {
        return await this.notificationService.findOne(id);
    }

    @Patch(':id')
    @ApiResponse({type: Notification})
    @ApiTags('Update notification by id')
    async update(@Param('id') id: string, @Body() data: CreateNotificationDto): Promise<Notification> {
        return await this.notificationService.update(id, data)
    }

    @Get()
    @ApiResponse({type: [Notification]})
    @ApiTags('Get list notification')
    async findAll(): Promise<Notification[]> {
        return await this.notificationService.findAll();
    }

    @Delete(':id')
    @ApiResponse({type: Notification})
    @ApiTags('Delete notification by id')
    async delete(@Param('id') id: string): Promise<Notification> {
        return await this.notificationService.delete(id);
    }
}