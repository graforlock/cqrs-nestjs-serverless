import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { GetBasketsQuery } from '../impl';
import { BasketReadRepository } from '../../../infrastructure/database/repository/basket.repository';
import { GetBasketsResponseDto } from '../../dtos/get-baskets-response.dto';

@QueryHandler(GetBasketsQuery)
export class GetBasketsHandler implements IQueryHandler<GetBasketsQuery> {
  constructor(
    @Inject(BasketReadRepository) private basketRepository: BasketReadRepository,
  ) {}

  async execute(): Promise<GetBasketsResponseDto> {
    console.log(clc.yellowBright('Async GetBasketsQuery...'));
    
    const results = await this.basketRepository.findAll()

    console.log(clc.yellowBright('Async GetBasketsQuery...', JSON.stringify(results)));

    return results;
  }
}
