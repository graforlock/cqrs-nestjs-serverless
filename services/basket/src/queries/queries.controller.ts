import { Controller, Get, Param } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetBasketsResponseDto } from './dtos/get-baskets-response.dto';
import { GetBasketsQuery } from './queries/impl/get-baskets.query';
import { GetBasketQuery } from './queries/impl/get-basket.query';

@Controller('baskets')
export class HeroesGameController {
  constructor(
    private readonly queryBus: QueryBus,
  ) {}

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.queryBus.execute(new GetBasketQuery(id));
  }

  @Get()
  async findAll(): Promise<GetBasketsResponseDto[]> {
    return this.queryBus.execute(new GetBasketsQuery());
  }
}
