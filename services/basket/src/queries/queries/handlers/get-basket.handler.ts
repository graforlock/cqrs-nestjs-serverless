import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { Db, ObjectId } from 'mongodb';
import { GetBasketQuery } from '../impl/get-basket.query';

@QueryHandler(GetBasketQuery)
export class GetBasketHandler implements IQueryHandler<GetBasketQuery> {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: Db,
  ) {}

  async execute(query: GetBasketQuery) {
    console.log(clc.yellowBright('Async GetBasketQuery...'));
    return await this.db.collection('baskets').findOne({ _id: new ObjectId(query.id) });
  }
}
