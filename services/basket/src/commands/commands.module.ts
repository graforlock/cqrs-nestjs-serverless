import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { BasketRepository } from './repositories/basket.repository';
import { CommandsController } from './commands.controller';
import { OrmModule } from '../infrastructure/orm/orm.module';
import { ProjectionHandlers } from './projections/handlers';
import { DynamooseModule } from 'nestjs-dynamoose';
import { BasketModule } from '../infrastructure/database/database.module';

@Module({
  imports: [
    CqrsModule,
    OrmModule,
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
  controllers: [CommandsController],
  providers: [
    BasketRepository,
    ...CommandHandlers,
    ...EventHandlers,
    ...ProjectionHandlers
  ],
})
export class CommandsModule {}
