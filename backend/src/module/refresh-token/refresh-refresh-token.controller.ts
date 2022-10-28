import { CreateRefreshTokenDto } from './dto/create-refresh-token.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { RefreshToken } from './refresh-token.schema';
import { RefreshTokenService } from './refresh-token.service';

@Controller('refresh-token')
export class RefreshTokenController {
    constructor(private readonly refreshTokenService: RefreshTokenService) { }
    @Post()
    async create(@Body() data: CreateRefreshTokenDto): Promise<RefreshToken> {
        return await this.refreshTokenService.create(data)
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<RefreshToken> {
        return await this.refreshTokenService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: CreateRefreshTokenDto): Promise<RefreshToken> {
        return await this.refreshTokenService.update(id, data)
    }

    @Get()
    async findAll(): Promise<RefreshToken[]> {
        return await this.refreshTokenService.findAll();
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<RefreshToken> {
        return await this.refreshTokenService.delete(id);
    }
}