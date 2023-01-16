import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { Basket, BasketKey } from './basket.interface';

@Injectable()
export class BasketReadRepository {
  constructor(
    @InjectModel('Users')
    private basketModel: Model<Basket, BasketKey>,
  ) {}

  create(basket: Basket) {
    return this.basketModel.create(basket);
  }

  update(key: BasketKey, user: Partial<Basket>) {
    return this.basketModel.update(key, user);
  }

  findOne(key: BasketKey) {
    return this.basketModel.get(key);
  }

  findAll() {
    return this.basketModel.scan().exec();
  }
}