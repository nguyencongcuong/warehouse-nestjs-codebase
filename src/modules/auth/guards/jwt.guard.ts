import { ExecutionContext, HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from 'src/modules/users/users.service';
import { AuthService } from 'src/modules/auth/auth.service';

@Injectable()
export class JwtGuard extends AuthGuard('jwt') {
  private logger = new Logger(JwtGuard.name);

  constructor(private userService: UsersService, private authService: AuthService) {
    super();
  }

  async canActivate(context: ExecutionContext) {
    try {
      const req = context.switchToHttp().getRequest();

      const jwt = req.headers.authorization.replace('Bearer', '').trim();

      const decodedJwt = this.authService.decodeJwt(jwt);
      const isFromB2C = decodedJwt.iss.includes('b2clogin');
      const payload = isFromB2C
        ? await this.authService.verifyAzureADB2CJwt(jwt)
        : await this.authService.verifyAzureADJwt(jwt);

      if (payload) {
        const email = payload['emails'];
        const user = await this.userService.findOne(payload.sub);
        if (user) {
          req.user = user;
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } catch (e) {
      this.logger.error(e.message);
      throw new HttpException(e.message, HttpStatus.UNAUTHORIZED);
    }
  }
}
