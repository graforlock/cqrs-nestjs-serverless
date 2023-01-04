import { LoadStrategy, Options } from '@mikro-orm/core';

import { BasketItem } from "./entities/basket-item.entity";
import { Basket } from "./entities/basket.entity";

const config: Options = {
  entities: [Basket, BasketItem],
  dbName: 'sales',
  type: 'postgresql',
  loadStrategy: LoadStrategy.JOINED
};

export default config;