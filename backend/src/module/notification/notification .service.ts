import { UserService } from './../user/user.service';
import { CreateNotificationDto } from './dto/create-notification .dto';
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Notification, NotificationDocument } from './notification .schema';

@Injectable()
export class NotificationService {
    constructor(
        @InjectModel(Notification.name) private notificationModel: Model<NotificationDocument>,
        private userService: UserService
    ) { }

    async create(data: CreateNotificationDto): Promise<Notification> {
        const newNotification = new this.notificationModel(data);
        return await newNotification.save();
    }

    async findAll(): Promise<Notification[]> {
        return await this.notificationModel.find()
    }

    async delete(_id: string): Promise<Notification> {
        const notification = await this.notificationModel.findByIdAndRemove({_id})
        if (notification) {
            return notification
        } else {
            throw new NotFoundException('Notification not found')
        }
    }

    async findOne(_id: string): Promise<Notification> {
        const notification = await this.notificationModel.findById({_id})
        if (notification) {
            return notification
        } else {
            throw new NotFoundException('Notification not found')
        }
    }

    async update(_id: string, data: CreateNotificationDto): Promise<Notification> {
        const notification = await this.notificationModel.findByIdAndUpdate(_id, data, {new: true})
        if (notification) {
            return notification
        } else {
            throw new NotFoundException('Notification not found')
        }
    }

    async getNotificationByUserId(id: string): Promise<Notification[]> {
        return await this.notificationModel.find({user_id: id})
    }
}
