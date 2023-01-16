import { Inject } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import * as clc from 'cli-color';

import { ServiceItemRepository } from '../../../infrastructure/database/repository/service-item.repository';
import { ServiceItem } from '../../domain/models/service-item.model';
import { UpdateServiceItemDto } from '../../dtos/update-service-items.dto';

export class UpdateServiceItemHandler {
  constructor(
    private readonly repository: ServiceItemRepository,
    @Inject(EventBus) private readonly eventBus: EventBus,
  ) {}

  async execute(id: string, updateServiceItemRequestDto: Partial<UpdateServiceItemDto>) {
    console.log(clc.yellowBright('Async CreateServiceItemHandler...'));
        
    const serviceItem = new ServiceItem(id, updateServiceItemRequestDto);

    serviceItem.update();

    const result = await this.repository.update({ id }, serviceItem);

    this.eventBus.publishAll(serviceItem.getUncommittedEvents());

    return { id: result.id };
  }
}

