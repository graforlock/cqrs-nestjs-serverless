import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { BasketSchema } from './entities/basket.schema';

import { BasketReadRepository } from './repository/basket.repository';

@Module({
  imports: [
    DynamooseModule.forFeature([{ name: 'Users', schema: BasketSchema }]),
  ],
  providers: [BasketReadRepository],
  exports: [BasketReadRepository]
})
export class BasketModule {}