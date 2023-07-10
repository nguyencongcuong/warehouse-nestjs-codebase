import { Test, TestingModule } from '@nestjs/testing';
import { CustomBrokersService } from './custom-brokers.service';

describe('CustomBrokersService', () => {
  let service: CustomBrokersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomBrokersService],
    }).compile();

    service = module.get<CustomBrokersService>(CustomBrokersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
