import { Inject, Injectable } from '@nestjs/common';
import * as clc from 'cli-color';
import { BasketReadRepository } from '../../../infrastructure/database/repository/basket.repository';

@Injectable()
export class BasketCreatedProjectionHandler {
  constructor(
    @Inject(BasketReadRepository) private basketRepository: BasketReadRepository,
  ) {}
  
  async project(
    id: string,
    userId: string,
    items: object[]
  ) {
    console.log(clc.yellowBright('Async BasketCreatedProjectionHandler...'));

    const result = await this.basketRepository.create({ id, userId, items});

    console.log(clc.greenBright('Async BasketCreatedProjectionHandler...', result));

    return result;
  }
}

