import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateServiceItemDto } from '../../dtos/update-service-items.dto';
import { UpdateServiceItemHandler } from './update-service-item.handler';

@Controller('service-items')
export class UpdateServiceItemsController {
  constructor(
    private readonly useCase: UpdateServiceItemHandler,
  ) {}

  @Patch(':id')
  async update(@Param() params, @Body() updateServiceItemDto: Partial<UpdateServiceItemDto>) {)
    return this.useCase.execute(params.id, updateServiceItemDto);
  }
}