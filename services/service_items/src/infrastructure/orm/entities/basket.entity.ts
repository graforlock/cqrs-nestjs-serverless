import { v4 } from 'uuid';
import { Collection, Entity, OneToMany, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { BasketItemEntity } from './basket-item.entity';

@Entity({ tableName: 'basket' })
export class BasketEntity {
  @PrimaryKey({ type: 'uuid' })
  public id: string = v4();

  @Property()
  public createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  public updatedAt: Date = new Date();

  @Property({ nullable: true })
  @Unique()
  public code: string;

  @Property()
  @Unique()
  public userId: string;

  @OneToMany(() => BasketItemEntity, (item: BasketItemEntity) => item.basketId)
  public items = new Collection<BasketItemEntity>(this);

  constructor(id: string, userId: string) {
    this.id = id;
    this.userId = userId;
  }
}