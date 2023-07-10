import { Module } from '@nestjs/common';
import { ParcelsController } from './parcels.controller';
import { ParcelsService } from './parcels.service';
import { UsersService } from '../../users/users.service';
import { AuthModule } from '../../auth/auth.module';

@Module({
  controllers: [ParcelsController],
  providers: [ParcelsService, UsersService],
  imports: [AuthModule],
})
export class ParcelsModule {}
