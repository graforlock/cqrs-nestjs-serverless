import { AggregateRoot } from "@nestjs/cqrs";

import { ServiceItemCreatedEvent } from "../../events/impl/service-item-created.event";
import { ServiceItemUpdatedEvent } from "../../events/impl/service-item-updated.event";
import { ServiceItemProps } from "./service-item.types";

export class ServiceItem<A extends ServiceItemProps | Partial<ServiceItemProps>> extends AggregateRoot {
  constructor(
    public readonly id: string,
    public readonly props: A
    ) {
    super();
  }

  create() {
    // validation

    this.apply(new ServiceItemCreatedEvent(
      this.id,
      this.props as ServiceItemProps
    ));
  }

  update() {

    this.apply(new ServiceItemUpdatedEvent(
      this.id,
      this.props
    ));
  }
}
