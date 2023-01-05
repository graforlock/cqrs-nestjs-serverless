import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';
import * as clc from 'cli-color';

import { BasketEntity } from '../../infrastructure/orm/entities/basket.entity';
import { Basket } from '../domain/models/basket.model';
import { BasketItem } from '../domain/models/basket-item.model';
import { IBasketRepository } from '../../infrastructure/interfaces/basket.interface';

@Injectable()
export class BasketRepository implements IBasketRepository<Basket>{
  constructor(
    @InjectRepository(BasketEntity)
    private readonly basketRepository: EntityRepository<BasketEntity>,
  ) {}
  
  async findOneById(id: string): Promise<Basket> {
    console.log(clc.yellowBright('Async basketEntity...', id));

    const basketEntity = await this.basketRepository.findOne({ id }, { populate: ['items']});
    const items = basketEntity.items
      .getItems()
      .map(item => new BasketItem(
        item.id,
        item.createdAt,
        item.updatedAt,
        item.basketId as unknown as string,
        item.price,
        item.description,
        item.attributes
      ));

    return new Basket(basketEntity.id, basketEntity.userId, items);
  }

  async findAll(): Promise<Basket[]> {
    const baskets = await this.basketRepository.findAll();

    return baskets.map(basket => {
      const items = basket.items.getItems().map(item => new BasketItem(
        item.id,
        item.createdAt,
        item.updatedAt,
        item.basketId as unknown as string,
        item.price,
        item.description,
        item.attributes
      ));
      return new Basket(basket.id, basket.userId, items);
    });
  }

  async save(basket: Basket): Promise<Basket> {    
    await this.basketRepository.upsert(new BasketEntity(basket.id, basket.userId));

    return basket;
  }
}
