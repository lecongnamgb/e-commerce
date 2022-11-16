import { CreateNotificationDto } from './dto/create-notification.dto';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Notification, NotificationDocument } from './notification.schema';

@Injectable()
export class NotificationService {
    constructor(
        @InjectModel(Notification.name) private notificationModel: Model<NotificationDocument>
    ) { }

    async create(userId: string, data: CreateNotificationDto) {
        const newNotification = new this.notificationModel({
            user_id: userId,
            ...data
        });
        await newNotification.save();
        return {
            success: true,
            data: newNotification
        }
    }

    async findAll() {
        const notification = await this.notificationModel.find()
        return {
            success: true,
            data: notification
        }
    }

    async delete(_id: string) {
        const notification = await this.notificationModel.findByIdAndRemove({ _id })
        if (notification) {
            return {
                success: true
            }
        } else {
            return {
                success: false,
                data: [],
                message: "Notification not found"
            }
        }
    }

    async findOne(_id: string) {
        const notification = await this.notificationModel.findById({ _id })
        if (notification) {
            return {
                success: true,
                data: notification
            }
        } else {
            return {
                success: false,
                data: [],
                message: "Notification not found"
            }
        }
    }

    async update(_id: string, data: CreateNotificationDto) {
        const notification = await this.notificationModel.findByIdAndUpdate(_id, data, { new: true })
        if (notification) {
            return {
                success: true
            }
        } else {
            return {
                success: false,
                data: [],
                message: "Notification not found"
            }
        }
    }

    async getNotificationByUserId(id: string) {
        const notification = await this.notificationModel.find({ user_id: id })
        return {
            success: true,
            data: notification
        }
    }
}
