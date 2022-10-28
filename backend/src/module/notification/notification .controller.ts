import { CreateNotificationDto } from './dto/create-notification .dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { Notification } from './notification .schema';
import { NotificationService } from './notification .service';

@Controller('notification')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService) { }
    @Post()
    async create(@Body() data: CreateNotificationDto): Promise<Notification> {
        return await this.notificationService.create(data)
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Notification> {
        return await this.notificationService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: CreateNotificationDto): Promise<Notification> {
        return await this.notificationService.update(id, data)
    }

    @Get()
    async findAll(): Promise<Notification[]> {
        return await this.notificationService.findAll();
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Notification> {
        return await this.notificationService.delete(id);
    }
}