import { ServiceItemProps } from "../../domain/models/service-item.types";

export class ServiceItemUpdatedEvent {
  constructor(
    public readonly id: string,
    public readonly props: Partial<ServiceItemProps>
  ) {}
}
