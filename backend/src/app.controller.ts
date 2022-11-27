import { Controller, Get, Post, UploadedFile, UseInterceptors, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @ApiTags('Upload file')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: (req, file, cb) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
          cb(null, true);
        } else {
          cb(
            new HttpException(
              'File is not supported, only upload png, jpg, jpeg file',
              HttpStatus.BAD_REQUEST,
            ),
            false,
          );
        }
      },
      storage: diskStorage({
        destination: 'uploads',
        filename: (req, file, cb) => {
          cb(null, `${Date.now()}-${file.originalname}`);
        },
      }),
    }),
  )
  async upload(@UploadedFile() file: Express.Multer.File) {
    return {
      url: `http://localhost:8000/uploads/${file.filename}`
    }
  }
}
