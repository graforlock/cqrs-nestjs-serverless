import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { ServiceItemSchema } from './entities/service-item.schema';

import { ServiceItemRepository } from './repository/service-item.repository';

@Module({
  imports: [
    DynamooseModule.forFeature([{ name: 'ServiceItems', schema: ServiceItemSchema }]),
  ],
  providers: [ServiceItemRepository],
  exports: [ServiceItemRepository]
})
export class DatabaseModule {}