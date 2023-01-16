import { Module } from '@nestjs/common';

import { ServiceItemsModule } from './service-items/service-items.module';

@Module({
  imports: [ServiceItemsModule],
})
export class ApplicationModule {}