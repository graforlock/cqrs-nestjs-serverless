import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import * as clc from 'cli-color';
import { ServiceItemCreatedEvent } from '../impl/service-item-created.event';

@EventsHandler(ServiceItemCreatedEvent)
export class BasketCreatedHandler implements IEventHandler<ServiceItemCreatedEvent> {
  constructor(
  ) {}
  
  async handle(event: ServiceItemCreatedEvent) {
    console.log(clc.yellowBright('Async ServiceItemCreatedEvent...', JSON.stringify(event)));
  }
}
