/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateLiquorDto } from './create-liquor.dto';

export class UpdateLiquorDto extends PartialType(CreateLiquorDto) {}
