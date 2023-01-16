import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { HeroesGameController } from './queries.controller';
import { QueryHandlers } from '../queries/queries/handlers';
import { DynamooseModule } from 'nestjs-dynamoose';
import { BasketModule } from '../infrastructure/database/database.module';

@Module({
  imports: [
    CqrsModule,
    DynamooseModule.forRoot({
      aws: {
        region: 'localhost',
        accessKeyId: 'access_key_id',
        secretAccessKey: 'secret_access_key'
      },
      local: true
    }),
    BasketModule
  ],
  controllers: [HeroesGameController],
  providers: [
    ...QueryHandlers
  ],
})
export class QueriesModule {}
