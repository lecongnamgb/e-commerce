import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './module/auth/auth.module';
import { CartModule } from './module/cart/cart.module';
import { CategoryModule } from './module/category/category.module';
import { ConfigModule } from '@nestjs/config';
import { FeedBackModule } from './module/feed-back/feed-back.module';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationModule } from './module/notification/notification.module';
import { OrderModule } from './module/order/order.module';
import { OrderStateModule } from './module/order-state/order-state.module';
import { ProductModule } from './module/product/product.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ShopModule } from './module/shop/shop.module';
import { UserModule } from './module/user/user.module';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: "/uploads"
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        secure: false,
        port: 587,
        auth: {
          user: 'haptienhoat@gmail.com',
          pass: 'pxyrknjdnnmmrnco',
        },
      },
      defaults: {
        from: '<haptienhoat@gmail.com>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    AuthModule,
    CategoryModule,
    FeedBackModule,
    NotificationModule,
    OrderModule,
    ProductModule,
    ShopModule,
    UserModule,
    OrderStateModule,
    CartModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
