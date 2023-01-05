import { AggregateRoot } from "@nestjs/cqrs";

import { BasketCreatedEvent } from "../../events/impl/basket-created.event";
import { BasketItem } from "./basket-item.model";

export class Basket extends AggregateRoot {
  constructor(public readonly id: string, public readonly userId: string, public readonly items: BasketItem[] = []) {
    super();
  }

  create() {
    this.apply(new BasketCreatedEvent(this.id, this.userId, []));
  }
}
