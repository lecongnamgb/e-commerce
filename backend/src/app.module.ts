import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './module/auth/auth.module';
import { CategoryModule } from './module/category/category.module';
import { ConfigModule } from '@nestjs/config';
import { FeedBackModule } from './module/feed-back/feed-back.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationModule } from './module/notification/notification .module';
import { OrderModule } from './module/order/order.module';
import { ProductModule } from './module/product/product.module';
import { ShopModule } from './module/shop/shop.module';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL),
    AuthModule,
    CategoryModule,
    FeedBackModule,
    NotificationModule,
    OrderModule,
    ProductModule,
    ShopModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
