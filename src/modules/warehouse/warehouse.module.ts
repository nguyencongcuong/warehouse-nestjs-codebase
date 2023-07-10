import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ContainersModule } from './containers/containers.module';
import { MawbsController } from './mawbs/mawbs.controller';
import { MawbsModule } from './mawbs/mawbs.module';
import { ParcelsModule } from './parcels/parcels.module';
import { UsersModule } from '../users/users.module';
import { LoggerMiddleware } from 'src/commons/middlewares/logger.middleware';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { MerchantsModule } from './merchants/merchants.module';
import { CustomBrokersModule } from './custom-brokers/custom-brokers.module';
import { DestinationsModule } from './destinations/destinations.module';

@Module({
  controllers: [],
  providers: [AuthService],
  imports: [
    AuthModule,
    UsersModule,
    MawbsModule,
    ContainersModule,
    ParcelsModule,
    MerchantsModule,
    CustomBrokersModule,
    DestinationsModule,
  ],
})
export class WarehouseModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(MawbsController);
  }
}
