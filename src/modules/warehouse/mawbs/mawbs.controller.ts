import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateMawbDto } from './dto/create-mawb.dto';
import { UpdateMawbDto } from './dto/update-mawb.dto';
import { MawbsService } from './mawbs.service';
import { Roles } from 'src/commons/decorators/role.decorator';
import { Role } from 'src/commons/enums/role.enum';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('mawbs')
@Controller()
export class MawbsController {
  constructor(private readonly mawbsService: MawbsService) {}

  @Roles(Role.ADMINISTRATOR)
  @Post()
  create(@Body() createMawbDto: CreateMawbDto) {
    return this.mawbsService.create(createMawbDto);
  }

  @Get()
  findAll() {
    return this.mawbsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mawbsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMawbDto: UpdateMawbDto) {
    return this.mawbsService.update(+id, updateMawbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mawbsService.remove(+id);
  }
}
