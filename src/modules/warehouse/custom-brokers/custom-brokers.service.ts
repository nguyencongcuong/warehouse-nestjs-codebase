import { Injectable } from '@nestjs/common';
import { CreateCustomBrokerDto } from './dto/create-custom-broker.dto';
import { UpdateCustomBrokerDto } from './dto/update-custom-broker.dto';

@Injectable()
export class CustomBrokersService {
  create(createCustomBrokerDto: CreateCustomBrokerDto) {
    return 'This action adds a new customBroker';
  }

  findAll() {
    return `This action returns all customBrokers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customBroker`;
  }

  update(id: number, updateCustomBrokerDto: UpdateCustomBrokerDto) {
    return `This action updates a #${id} customBroker`;
  }

  remove(id: number) {
    return `This action removes a #${id} customBroker`;
  }
}
