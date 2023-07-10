import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { ParcelsService } from './parcels.service';
import { Roles } from '../../../commons/decorators/role.decorator';
import { Role } from '../../../commons/enums/role.enum';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('parcels')
@Controller()
export class ParcelsController {
  constructor(private readonly parcelsService: ParcelsService) {}

  @Post()
  create(@Body() createParcelDto: CreateParcelDto) {
    return this.parcelsService.create(createParcelDto);
  }

  @Roles(Role.ADMINISTRATOR)
  @Get()
  findAll() {
    return this.parcelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parcelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParcelDto: UpdateParcelDto) {
    return this.parcelsService.update(+id, updateParcelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parcelsService.remove(+id);
  }
}
