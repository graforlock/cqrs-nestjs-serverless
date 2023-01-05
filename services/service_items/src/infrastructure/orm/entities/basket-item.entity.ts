import { v4 } from 'uuid';
import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { BasketEntity } from './basket.entity';

@Entity({ tableName: 'basket_item' })
export class BasketItemEntity {
  @PrimaryKey({ type: 'uuid' })
  public id: string = v4();

  @Property()
  public createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  public updatedAt: Date = new Date();

  @ManyToOne(() => BasketEntity)
  public basketId: BasketEntity;

  @Property()
  public price: number;

  @Property()
  public salePrice: number;

  @Property()
  public description: string;

  @Property()
  public attributes: object;
}

