import { Controller, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateBasketCommand } from './commands/impl/create-basket.command';

@Controller('baskets')
export class CommandsController {
  constructor(
    private readonly commandBus: CommandBus,
  ) {}

  @Post(':userId')
  async create(@Param('userId', ParseUUIDPipe) userId: string) {
    return this.commandBus.execute(new CreateBasketCommand(userId));
  }
}