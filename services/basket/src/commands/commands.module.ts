import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { BasketRepository } from './repositories/basket.repository';
import { CommandsController } from './commands.controller';
import { OrmModule } from '../infrastructure/orm/orm.module';
import { ProjectionsModule } from './projections/projections.module';
import { BasketCreatedProjectionHandler } from './projections/handlers/create-basket.handler';
// import { BasketCreatedProjectionHandler } from '../projections/handlers/create-basket.handler';

@Module({
  imports: [
    CqrsModule,
    OrmModule,
    ProjectionsModule
  ],
  controllers: [CommandsController],
  providers: [
    BasketCreatedProjectionHandler,
    BasketRepository,
    ...CommandHandlers,
    ...EventHandlers
  ],
})
export class CommandsModule {}
