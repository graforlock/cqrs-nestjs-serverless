import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { Db } from 'mongodb';
import { GetBasketsQuery } from '../impl';

@QueryHandler(GetBasketsQuery)
export class GetBasketsHandler implements IQueryHandler<GetBasketsQuery> {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: Db,
  ) {}

  async execute(query: GetBasketsQuery) {
    console.log(clc.yellowBright('Async GetBasketsQuery...'));
    return await this.db.collection('baskets').find().toArray();
  }
}
