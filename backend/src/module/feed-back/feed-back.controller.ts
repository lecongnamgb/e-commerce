import { CreateFeedBackDto } from './dto/create-feed-back.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { FeedBack } from './feed-back.schema';
import { FeedBackService } from './feed-back.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('feed-back')
export class FeedBackController {
    constructor(private readonly feedBackService: FeedBackService) { }
    @Post()
    @ApiBody({type: CreateFeedBackDto})
    @ApiResponse({type: FeedBack})
    @ApiTags('Create feed back')
    async create(@Body() data: CreateFeedBackDto): Promise<FeedBack> {
        return await this.feedBackService.create(data)
    }

    @Get(':id')
    @ApiResponse({type: FeedBack})
    @ApiTags('Get feed back by id')
    async findOne(@Param('id') id: string): Promise<FeedBack> {
        return await this.feedBackService.findOne(id);
    }

    @Patch(':id')
    @ApiResponse({type: FeedBack})
    @ApiTags('Update feed back by id')
    async update(@Param('id') id: string, @Body() data: CreateFeedBackDto): Promise<FeedBack> {
        return await this.feedBackService.update(id, data)
    }

    @Get()
    @ApiResponse({type: [FeedBack]})
    @ApiTags('Get list feed back')
    async findAll(): Promise<FeedBack[]> {
        return await this.feedBackService.findAll();
    }

    @Delete(':id')
    @ApiResponse({type: FeedBack})
    @ApiTags('Delete feed back by id')
    async delete(@Param('id') id: string): Promise<FeedBack> {
        return await this.feedBackService.delete(id);
    }
}