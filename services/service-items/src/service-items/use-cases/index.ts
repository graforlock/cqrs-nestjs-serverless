import { GetServiceItemHandler } from './get-service-items/get-service-items.handler';
import { CreateServiceItemHandler } from './create-service-item/create-service-item.handler';
import { UpdateServiceItemHandler } from './update-service-item/update-service-item.handler';

export const UseCaseHandlers = [CreateServiceItemHandler, GetServiceItemHandler, UpdateServiceItemHandler];
