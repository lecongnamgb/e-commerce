import { JwtAuthGuard } from './../auth/guard/jwt-auth.guard';
import { CreateFeedBackDto } from './dto/create-feed-back.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';

import { FeedBackService } from './feed-back.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('feed-back')
export class FeedBackController {
    constructor(private readonly feedBackService: FeedBackService) { }

    @UseGuards(JwtAuthGuard)
    @Get('user')
    @ApiTags('Get list feed back by user id')
    async getFeedBackByUserId(@Req() req) {
        return await this.feedBackService.getFeedBackByUserId(req.user.userId);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':star/star')
    @ApiTags('Get list feed back by star')
    async getFeedBackByStar(@Param('star') star: number, @Req() req) {
        return await this.feedBackService.getFeedBackByStar(req.user.userId, star);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id/product')
    @ApiTags('Get list feed back by product id')
    async getFeedBackByProductId(@Param('id') id: string) {
        return await this.feedBackService.getFeedBackByProductId(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @ApiBody({ type: CreateFeedBackDto })
    @ApiTags('Create feed back')
    async create(@Body() data: CreateFeedBackDto, @Req() req) {
        data.user_id = req.user.userId
        return await this.feedBackService.create(data)
    }

    @Get(':id')
    @ApiTags('Get feed back by id')
    async findOne(@Param('id') id: string) {
        return await this.feedBackService.findOne(id);
    }

    @Patch(':id')
    @ApiBody({ type: CreateFeedBackDto })
    @ApiTags('Update feed back by id')
    async update(@Param('id') id: string, @Body() data: CreateFeedBackDto) {
        return await this.feedBackService.update(id, data)
    }

    @Get()
    @ApiTags('Get list feed back')
    async findAll() {
        return await this.feedBackService.findAll();
    }

    @Delete(':id')
    @ApiTags('Delete feed back by id')
    async delete(@Param('id') id: string) {
        return await this.feedBackService.delete(id);
    }
}