import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  welcome(env: string): string {
    return `Welcome to Warehouse API on ${env} mode`;
  }
}
