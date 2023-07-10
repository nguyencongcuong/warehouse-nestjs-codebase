import { Test, TestingModule } from '@nestjs/testing';
import { MawbsController } from './mawbs.controller';
import { MawbsService } from './mawbs.service';

describe('MawbsController', () => {
  let controller: MawbsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MawbsController],
      providers: [MawbsService],
    }).compile();

    controller = module.get<MawbsController>(MawbsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
