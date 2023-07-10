import { Module } from '@nestjs/common';
import { MawbsController } from './mawbs.controller';
import { MawbsService } from './mawbs.service';

@Module({
  controllers: [MawbsController],
  providers: [MawbsService],
})
export class MawbsModule {}
