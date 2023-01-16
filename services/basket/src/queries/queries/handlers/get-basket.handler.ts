import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { GetBasketQuery } from '../impl/get-basket.query';
import { BasketReadRepository } from '../../../infrastructure/database/repository/basket.repository';
import { GetBasketResponseDto } from '../../dtos/get-basket-response.dto';

@QueryHandler(GetBasketQuery)
export class GetBasketHandler implements IQueryHandler<GetBasketQuery> {
  constructor(
    @Inject(BasketReadRepository) private basketRepository: BasketReadRepository,
  ) {}

  async execute(query: GetBasketQuery): Promise<GetBasketResponseDto> {
    console.log(clc.yellowBright('Async GetBasketQuery...'));

    const result = await this.basketRepository.findOne({ id: query.id });

    console.log(clc.yellowBright('Async GetBasketsQuery...', JSON.stringify(result)));

    return result;
  }
}
