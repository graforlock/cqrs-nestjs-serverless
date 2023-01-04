import { Inject, Injectable } from '@nestjs/common';
import * as MUUID from 'uuid-mongodb';
import * as clc from 'cli-color';
import { Db } from 'mongodb';

@Injectable()
export class BasketCreatedProjectionHandler {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: Db,
  ) {}
  
  async project(
    id: string,
    userId: string,
    items: unknown[]
  ) {
    console.log(clc.yellowBright('Async BasketCreatedProjectionHandler...'));

    const uuid = MUUID.from(id) as any;

    const result = await this.db.collection('baskets').insertOne({ _id: uuid, userId, items });

    console.log(clc.yellowBright('Async BasketCreatedProjectionHandler...', result));
  }
}
