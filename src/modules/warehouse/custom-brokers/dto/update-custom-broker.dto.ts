import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomBrokerDto } from './create-custom-broker.dto';

export class UpdateCustomBrokerDto extends PartialType(CreateCustomBrokerDto) {}
