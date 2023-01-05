import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../infrastructure/database/dynamodb-database.module';
import { BasketCreatedProjectionHandler } from './handlers/create-basket.handler';

@Module({
  imports: [DatabaseModule],
  providers: [BasketCreatedProjectionHandler]
})
export class ProjectionsModule {}
