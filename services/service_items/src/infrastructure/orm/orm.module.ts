import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { BasketEntity } from './entities/basket.entity';

import config from './mikro-orm.config';

@Module({
  imports: [
    MikroOrmModule.forRoot(config),
    MikroOrmModule.forFeature({
      entities: [BasketEntity],
    }),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule { }