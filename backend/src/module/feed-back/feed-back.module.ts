import { FeedBack, FeedBackSchema } from './feed-back.schema';

import { FeedBackController } from './feed-back.controller';
import { FeedBackService } from './feed-back.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: FeedBack.name, schema: FeedBackSchema }])],
  controllers: [FeedBackController],
  providers: [FeedBackService],
  exports: [FeedBackService]
})
export class FeedBackModule {}