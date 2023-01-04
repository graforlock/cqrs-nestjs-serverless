import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import * as clc from 'cli-color';
import { BasketCreatedProjectionHandler } from '../../../projections/handlers/create-basket.handler';
import { BasketCreatedEvent } from '../impl/basket-created.event';

@EventsHandler(BasketCreatedEvent)
export class BasketCreatedHandler implements IEventHandler<BasketCreatedEvent> {
  constructor(
    private readonly projectionHandler: BasketCreatedProjectionHandler,
  ) {}
  
  async handle(event: BasketCreatedEvent) {
    console.log(clc.yellowBright('Async BasketFoundItemsEvent...', JSON.stringify(event)));

    await this.projectionHandler.project(event.id, event.userId, event.items);
  }
}
