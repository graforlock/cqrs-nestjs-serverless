import { Module } from '@nestjs/common';

import { CommandsModule } from './commands/commands.module';
import { QueriesModule } from './queries/queries.module';

@Module({
  imports: [CommandsModule, QueriesModule],
})
export class ApplicationModule {}