import { CreateRefreshTokenDto } from './dto/create-refresh-token.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { RefreshToken } from './refresh-token.schema';
import { RefreshTokenService } from './refresh-token.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('refresh-token')
export class RefreshTokenController {
    constructor(private readonly refreshTokenService: RefreshTokenService) { }
    @Post()
    @ApiBody({type: CreateRefreshTokenDto})
    @ApiResponse({type: RefreshToken})
    @ApiTags('Create refresh token')
    async create(@Body() data: CreateRefreshTokenDto): Promise<RefreshToken> {
        return await this.refreshTokenService.create(data)
    }

    @Get(':id')
    @ApiResponse({type: RefreshToken})
    @ApiTags('Get refresh token by id')
    async findOne(@Param('id') id: string): Promise<RefreshToken> {
        return await this.refreshTokenService.findOne(id);
    }

    @Patch(':id')
    @ApiResponse({type: RefreshToken})
    @ApiTags('Update refresh token by id')
    async update(@Param('id') id: string, @Body() data: CreateRefreshTokenDto): Promise<RefreshToken> {
        return await this.refreshTokenService.update(id, data)
    }

    @Get()
    @ApiResponse({type: [RefreshToken]})
    @ApiTags('Get list refresh token')
    async findAll(): Promise<RefreshToken[]> {
        return await this.refreshTokenService.findAll();
    }

    @Delete(':id')
    @ApiResponse({type: RefreshToken})
    @ApiTags('Delete refresh token by id')
    async delete(@Param('id') id: string): Promise<RefreshToken> {
        return await this.refreshTokenService.delete(id);
    }
}