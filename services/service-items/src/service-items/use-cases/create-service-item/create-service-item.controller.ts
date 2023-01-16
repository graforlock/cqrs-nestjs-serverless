import { Body, Controller, Post } from '@nestjs/common';
import { CreateServiceItemDto } from '../../dtos/create-service-item.dto';
import { CreateServiceItemHandler } from './create-service-item.handler';
import * as clc from 'cli-color';

@Controller('service-items')
export class CreateServiceItemsController {
  constructor(
    private readonly useCase: CreateServiceItemHandler,
  ) {}

  @Post()
  async create(@Body() createServiceItemDto: CreateServiceItemDto) {
    console.log(clc.yellowBright('Async CreateServiceItemsController...', createServiceItemDto));

    return this.useCase.execute(createServiceItemDto);
  }
}