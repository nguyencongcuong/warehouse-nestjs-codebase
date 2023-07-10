import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContainersModule } from './modules/warehouse/containers/containers.module';
import { MawbsModule } from './modules/warehouse/mawbs/mawbs.module';
import { ParcelsModule } from './modules/warehouse/parcels/parcels.module';
import { WarehouseModule } from './modules/warehouse/warehouse.module';
import { HttpExceptionFilter } from './commons/validators/response.validator';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { JwtGuard } from './modules/auth/guards/jwt.guard';
import { MerchantsModule } from './modules/warehouse/merchants/merchants.module';
import { CustomBrokersModule } from './modules/warehouse/custom-brokers/custom-brokers.module';
import { DestinationsModule } from './modules/warehouse/destinations/destinations.module';

@Module({
  imports: [
    AuthModule,
    WarehouseModule,
    MawbsModule,
    ContainersModule,
    ParcelsModule,
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    RouterModule.register([
      {
        path: 'auth',
        module: AuthModule,
      },
      {
        path: 'users',
        module: UsersModule,
      },
      {
        path: 'warehouse',
        module: WarehouseModule,
        children: [
          {
            path: 'mawbs',
            module: MawbsModule,
          },
          {
            path: 'containers',
            module: ContainersModule,
          },
          {
            path: 'parcels',
            module: ParcelsModule,
          },
          {
            path: 'merchants',
            module: MerchantsModule,
          },
          {
            path: 'custom-brokers',
            module: CustomBrokersModule,
          },
          {
            path: 'destinations',
            module: DestinationsModule,
          },
        ],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
