import { Test, TestingModule } from '@nestjs/testing';
import { MawbsService } from './mawbs.service';

describe('MawbsService', () => {
  let service: MawbsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MawbsService],
    }).compile();

    service = module.get<MawbsService>(MawbsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
