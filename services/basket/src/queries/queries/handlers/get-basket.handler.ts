// import { DynamoDBDocumentClient, ExecuteStatementCommand } from '@aws-sdk/lib-dynamodb';
import * as AWS from 'aws-sdk';

import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { GetBasketQuery } from '../impl/get-basket.query';

@QueryHandler(GetBasketQuery)
export class GetBasketHandler implements IQueryHandler<GetBasketQuery> {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: AWS.DynamoDB,
  ) {}

  async execute(query: GetBasketQuery) {
    console.log(clc.yellowBright('Async GetBasketQuery...'));

    const result = await this.db.executeStatement({
        Statement: `SELECT * FROM basket WHERE basketId = "${query.id}"`
    }).promise();

    const items = result.Items;

    console.log(clc.yellowBright('Async GetBasketsQuery...', JSON.stringify(items)));

    return items.map((i) => AWS.DynamoDB.Converter.unmarshall(i))[0];
  }
}
