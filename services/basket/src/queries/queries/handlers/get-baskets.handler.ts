import * as AWS from 'aws-sdk';

import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { GetBasketsQuery } from '../impl';

@QueryHandler(GetBasketsQuery)
export class GetBasketsHandler implements IQueryHandler<GetBasketsQuery> {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: AWS.DynamoDB,
  ) {}

  async execute() {
    console.log(clc.yellowBright('Async GetBasketsQuery...'));
    
    const results = await this.db.executeStatement({
      Statement: `SELECT * FROM basket`
    }).promise();

    const items = results.Items;

    console.log(clc.yellowBright('Async GetBasketsQuery...', JSON.stringify(items)));

    return items.map((i) => AWS.DynamoDB.Converter.unmarshall(i))

  }
}
