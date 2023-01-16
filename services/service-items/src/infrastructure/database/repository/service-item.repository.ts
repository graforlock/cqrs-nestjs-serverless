import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { ServiceItem } from '../../../service-items/domain/models/service-item.model';
import { ServiceItemProps } from '../../../service-items/domain/models/service-item.types';
import { ServiceItemEntity, ServiceItemEntityKey } from './service-item.interface';

@Injectable()
export class ServiceItemRepository {
  constructor(
    @InjectModel('ServiceItems')
    private serviceItemModel: Model<ServiceItemEntity, ServiceItemEntityKey>,
  ) {}

  create(serviceItem: ServiceItem<ServiceItemProps>) {

    return this.serviceItemModel.create({
      id: serviceItem.id,
      ...serviceItem.props
    });
  }

  update(key: ServiceItemEntityKey, serviceItem: ServiceItem<Partial<ServiceItemProps>>) {
    return this.serviceItemModel.update(key, serviceItem);
  }

  findOne(key: ServiceItemEntityKey) {
    return this.serviceItemModel.get(key);
  }

  findAll() {
    return this.serviceItemModel.scan().exec();
  }
}