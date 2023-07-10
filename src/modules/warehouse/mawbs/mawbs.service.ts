import { Injectable } from '@nestjs/common';
import { CreateMawbDto } from './dto/create-mawb.dto';
import { UpdateMawbDto } from './dto/update-mawb.dto';

@Injectable()
export class MawbsService {
  create(createMawbDto: CreateMawbDto) {
    return 'This action adds a new mawb';
  }

  findAll() {
    return 'This action returns all mawbs';
  }

  findOne(id: number) {
    return `This action returns a #${id} mawb`;
  }

  update(id: number, updateMawbDto: UpdateMawbDto) {
    return `This action updates a #${id} mawb`;
  }

  remove(id: number) {
    return `This action removes a #${id} mawb`;
  }
}
