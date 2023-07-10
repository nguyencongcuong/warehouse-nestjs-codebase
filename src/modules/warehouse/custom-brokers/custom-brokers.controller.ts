import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CustomBrokersService } from './custom-brokers.service';
import { CreateCustomBrokerDto } from './dto/create-custom-broker.dto';
import { UpdateCustomBrokerDto } from './dto/update-custom-broker.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('custom-brokers')
@Controller('custom-brokers')
export class CustomBrokersController {
  constructor(private readonly customBrokersService: CustomBrokersService) {}

  @Post()
  create(@Body() createCustomBrokerDto: CreateCustomBrokerDto) {
    return this.customBrokersService.create(createCustomBrokerDto);
  }

  @Get()
  findAll() {
    return this.customBrokersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customBrokersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomBrokerDto: UpdateCustomBrokerDto) {
    return this.customBrokersService.update(+id, updateCustomBrokerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customBrokersService.remove(+id);
  }
}
