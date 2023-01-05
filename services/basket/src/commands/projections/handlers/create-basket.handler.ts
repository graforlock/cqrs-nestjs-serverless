import * as AWS from 'aws-sdk';
import { Inject, Injectable } from '@nestjs/common';
import * as clc from 'cli-color';

@Injectable()
export class BasketCreatedProjectionHandler {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: AWS.DynamoDB,
  ) {}
  
  async project(
    id: string,
    userId: string,
    items: unknown[]
  ) {
    console.log(clc.yellowBright('Async BasketCreatedProjectionHandler...'));

    const result = await this.db.executeStatement({
        Statement: `INSERT INTO basket value {'basketId':?, 'part':?, 'userId':?, 'items':? }`,
        "Parameters": [
          { "S": id },
          { "N": "1" },
          { "S": userId },
          { "L": items }
        ]
      }).promise();

    const response = result.Items;

    console.log(clc.yellowBright('Async BasketCreatedProjectionHandler...', response));

    return response;
  }
}

