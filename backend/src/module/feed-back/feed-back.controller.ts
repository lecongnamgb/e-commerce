import { CreateFeedBackDto } from './dto/create-feed-back.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { FeedBack } from './feed-back.schema';
import { FeedBackService } from './feed-back.service';

@Controller('feed-back')
export class FeedBackController {
    constructor(private readonly feedBackService: FeedBackService) { }
    @Post()
    async create(@Body() data: CreateFeedBackDto): Promise<FeedBack> {
        return await this.feedBackService.create(data)
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<FeedBack> {
        return await this.feedBackService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: CreateFeedBackDto): Promise<FeedBack> {
        return await this.feedBackService.update(id, data)
    }

    @Get()
    async findAll(): Promise<FeedBack[]> {
        return await this.feedBackService.findAll();
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<FeedBack> {
        return await this.feedBackService.delete(id);
    }
}