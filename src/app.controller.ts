import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService, private configService: ConfigService) {}

  @Get()
  welcome(): string {
    const env = this.configService.get('APP_ENV');
    return this.appService.welcome(env);
  }
}
