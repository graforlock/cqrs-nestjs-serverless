import { Controller, Get } from '@nestjs/common';
import { GetServiceItemHandler } from './get-service-items.handler';

@Controller('service-items')
export class GetServiceItemsController {
  constructor(
    private readonly useCase: GetServiceItemHandler,
  ) {}

  @Get()
  async findAll() {
    return this.useCase.execute();
  }
}