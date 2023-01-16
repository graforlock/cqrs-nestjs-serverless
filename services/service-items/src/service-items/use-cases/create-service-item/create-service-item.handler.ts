import { Inject } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { v4 } from 'uuid';

import { ServiceItemRepository } from '../../../infrastructure/database/repository/service-item.repository';
import { ServiceItem } from '../../domain/models/service-item.model';
import { CreateServiceItemDto } from '../../dtos/create-service-item.dto';

export class CreateServiceItemHandler {
  constructor(
    private readonly repository: ServiceItemRepository,
    @Inject(EventBus) private readonly eventBus: EventBus,
  ) {}

  async execute(createServiceItemRequestDto: CreateServiceItemDto) {
    console.log(clc.yellowBright('Async CreateServiceItemHandler...'));
    
    const id = v4();
    
    const serviceItem = new ServiceItem(id, createServiceItemRequestDto);

    serviceItem.create();

    const result = await this.repository.create(serviceItem);

    this.eventBus.publishAll(serviceItem.getUncommittedEvents())

    return { id: result.id };
  }
}

