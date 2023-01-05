import * as AWS from 'aws-sdk';
import { Global, Module } from '@nestjs/common';


@Global()
@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async (): Promise<AWS.DynamoDB> => {
        try {
          AWS.config.update({region: 'localhost', accessKeyId: 'access_key_id', secretAccessKey: 'secret_access_key'});

          return new AWS.DynamoDB({ endpoint: 'http://localhost:8000' });
        } catch (e) {
          throw e;
        }
      }
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}