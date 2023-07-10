import { Module } from '@nestjs/common';
import { CustomBrokersService } from './custom-brokers.service';
import { CustomBrokersController } from './custom-brokers.controller';

@Module({
  controllers: [CustomBrokersController],
  providers: [CustomBrokersService]
})
export class CustomBrokersModule {}
