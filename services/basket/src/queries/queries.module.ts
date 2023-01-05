import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { HeroesGameController } from './queries.controller';
import { QueryHandlers } from '../queries/queries/handlers';
import { DatabaseModule } from '../infrastructure/database/dynamodb-database.module';

@Module({
  imports: [CqrsModule, DatabaseModule],
  controllers: [HeroesGameController],
  providers: [
    ...QueryHandlers
  ],
})
export class QueriesModule {}
