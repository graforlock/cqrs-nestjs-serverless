import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { UseCaseHandlers } from './use-cases';
import { EventHandlers } from './events/handlers';
import { DynamooseModule } from 'nestjs-dynamoose';
import { DatabaseModule } from '../infrastructure/database/database.module';
import { CreateServiceItemsController } from './use-cases/create-service-item/create-service-item.controller';
import { GetServiceItemsController } from './use-cases/get-service-items/get-service-items.controller';
import { UpdateServiceItemsController } from './use-cases/update-service-item/update-service-item.controller';

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
    DatabaseModule
  ],
  controllers: [
    CreateServiceItemsController,
    GetServiceItemsController,
    UpdateServiceItemsController
  ],
  providers: [
    ...UseCaseHandlers,
    ...EventHandlers,
  ],
})
export class ServiceItemsModule {}
