import { FeedBack, FeedBackSchema } from './feed-back.schema';

import { FeedBackController } from './feed-back.controller';
import { FeedBackService } from './feed-back.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './../product/product.module';
import { UserModule } from './../user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: FeedBack.name, schema: FeedBackSchema }]),
    UserModule,
    ProductModule
  ],
  controllers: [FeedBackController],
  providers: [FeedBackService],
  exports: [FeedBackService]
})
export class FeedBackModule {}