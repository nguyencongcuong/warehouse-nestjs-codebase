import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ContainersService } from './containers.service';
import { CreateContainerDto } from './dto/create-container.dto';
import { UpdateContainerDto } from './dto/update-container.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('containers')
@Controller()
export class ContainersController {
  constructor(private readonly containersService: ContainersService) {}

  @Post()
  create(@Body() createContainerDto: CreateContainerDto) {
    console.log('dto', createContainerDto);
    return this.containersService.create(createContainerDto);
  }

  @Get()
  findAll() {
    return this.containersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.containersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContainerDto: UpdateContainerDto) {
    return this.containersService.update(+id, updateContainerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.containersService.remove(+id);
  }
}
