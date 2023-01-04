import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Basket } from './entities/basket.entity';

import config from './mikro-orm.config';

@Module({
  imports: [
    MikroOrmModule.forRoot(config),
    MikroOrmModule.forFeature({
      entities: [Basket],
    }),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule { }