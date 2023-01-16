import { ServiceItemProps } from "../../domain/models/service-item.types";

export class ServiceItemCreatedEvent {
  constructor(
    public readonly id: string,
    public readonly props: ServiceItemProps
  ) {}
}
