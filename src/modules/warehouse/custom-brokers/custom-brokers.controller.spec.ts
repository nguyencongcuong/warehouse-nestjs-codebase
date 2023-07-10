import { Test, TestingModule } from '@nestjs/testing';
import { CustomBrokersController } from './custom-brokers.controller';
import { CustomBrokersService } from './custom-brokers.service';

describe('CustomBrokersController', () => {
  let controller: CustomBrokersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomBrokersController],
      providers: [CustomBrokersService],
    }).compile();

    controller = module.get<CustomBrokersController>(CustomBrokersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
