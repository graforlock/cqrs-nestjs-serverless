import { LoadStrategy, Options } from '@mikro-orm/core';

import { BasketItemEntity } from "./entities/basket-item.entity";
import { BasketEntity } from "./entities/basket.entity";

const config: Options = {
  entities: [BasketEntity, BasketItemEntity],
  dbName: 'sales',
  type: 'postgresql',
  loadStrategy: LoadStrategy.JOINED
};

export default config;