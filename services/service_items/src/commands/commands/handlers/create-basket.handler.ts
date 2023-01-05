import { v4 } from 'uuid';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';

import { Basket } from '../../domain/models/basket.model';
import { BasketRepository } from '../../repositories/basket.repository';
import { CreateBasketCommand } from '../impl/create-basket.command';

@CommandHandler(CreateBasketCommand)
export class CreateBasketHandler
  implements ICommandHandler<CreateBasketCommand> {
  constructor(
    private readonly repository: BasketRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateBasketCommand) {
    console.log(clc.yellowBright('Async CreateBasketHandler...'));

    const id = v4();
    const { userId } = command;

    const BasketModel = this.publisher.mergeClassContext(Basket);

    const basket = await this.repository.save(new BasketModel(id, userId));

    basket.create();
    basket.commit();
  }
}

