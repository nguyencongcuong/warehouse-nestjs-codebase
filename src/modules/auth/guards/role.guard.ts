import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from 'src/commons/enums/role.enum';
import { UsersService } from 'src/modules/users/users.service';
import { AuthService } from '../auth.service';
import { ROLES_KEY } from '../../../commons/decorators/role.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  private logger = new Logger(RolesGuard.name);

  constructor(private reflector: Reflector, private userService: UsersService, private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);

      if (!requiredRoles) {
        return true;
      }

      const req = context.switchToHttp().getRequest();
      return requiredRoles.some((role) => req.user?.user_roles?.includes(role));
    } catch (e) {
      this.logger.error(e.message);
      throw new HttpException(e.message, HttpStatus.UNAUTHORIZED);
    }
  }
}
