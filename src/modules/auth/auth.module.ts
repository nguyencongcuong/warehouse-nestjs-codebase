import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { RolesGuard } from './guards/role.guard';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  imports: [PassportModule],
  exports: [AuthService],
})
export class AuthModule {}
