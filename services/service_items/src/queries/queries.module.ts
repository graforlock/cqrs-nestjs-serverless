import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { HeroesGameController } from './queries.controller';
import { DatabaseModule } from '../infrastructure/database/mongodb-database.module';
import { QueryHandlers } from './queries/handlers';

@Module({
  imports: [CqrsModule, DatabaseModule],
  controllers: [HeroesGameController],
  providers: [
    ...QueryHandlers
  ],
})
export class QueriesModule {}
