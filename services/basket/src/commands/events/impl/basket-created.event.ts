import { Basket } from "../../../infrastructure/orm/entities/basket.entity";

export class BasketCreatedEvent {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly items: Basket[]
  ) {}
}
