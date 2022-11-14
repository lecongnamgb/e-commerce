import { JwtAuthGuard } from './../auth/guard/jwt-auth.guard';
import { CreateFeedBackDto } from './dto/create-feed-back.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';

import { FeedBack } from './feed-back.schema';
import { FeedBackService } from './feed-back.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('feed-back')
export class FeedBackController {
    constructor(private readonly feedBackService: FeedBackService) { }

    @UseGuards(JwtAuthGuard)
    @Get('user')
    @ApiResponse({type: FeedBack})
    @ApiTags('Get list feed back by user id')
    async getFeedBackByUserId(@Req() req): Promise<any> {
        return await this.feedBackService.getFeedBackByUserId(req.user.userId);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':star/star')
    @ApiResponse({type: FeedBack})
    @ApiTags('Get list feed back by star')
    async getFeedBackByStar(@Param('star') star: number, @Req() req): Promise<FeedBack[]> {
        return await this.feedBackService.getFeedBackByStar(req.user.userId, star);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id/product')
    @ApiResponse({type: FeedBack})
    @ApiTags('Get list feed back by product id')
    async getFeedBackByProductId(@Param('id') id: string): Promise<any> {
        return await this.feedBackService.getFeedBackByProductId(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @ApiBody({type: CreateFeedBackDto})
    @ApiResponse({type: FeedBack})
    @ApiTags('Create feed back')
    async create(@Body() data: CreateFeedBackDto, @Req() req): Promise<FeedBack> {
        data.user_id = req.user.userId
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