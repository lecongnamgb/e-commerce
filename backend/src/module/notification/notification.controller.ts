import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';

import { NotificationService } from './notification.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('notification')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService) { }

    @UseGuards(JwtAuthGuard)
    @Get('user')
    @ApiTags('Get list notification by user id')
    async getNotificationByUserId(@Req() req) {
        return await this.notificationService.getNotificationByUserId(req.user.userId);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @ApiBody({ type: CreateNotificationDto })
    @ApiTags('Create notification')
    async create(@Body() data: CreateNotificationDto, @Req() req) {
        return await this.notificationService.create(req.user.userId, data)
    }

    @Get(':id')
    @ApiTags('Get notification by id')
    async findOne(@Param('id') id: string) {
        return await this.notificationService.findOne(id);
    }

    @Patch(':id')
    @ApiBody({ type: CreateNotificationDto })
    @ApiTags('Update notification by id')
    async update(@Param('id') id: string, @Body() data: CreateNotificationDto) {
        return await this.notificationService.update(id, data)
    }

    @Get()
    @ApiTags('Get list notification')
    async findAll() {
        return await this.notificationService.findAll();
    }

    @Delete(':id')
    @ApiTags('Delete notification by id')
    async delete(@Param('id') id: string) {
        return await this.notificationService.delete(id);
    }
}