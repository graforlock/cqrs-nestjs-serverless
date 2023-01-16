import { Inject } from '@nestjs/common';
import * as clc from 'cli-color';

import { ServiceItemRepository } from '../../../infrastructure/database/repository/service-item.repository';

export class GetServiceItemHandler {
  constructor(
    @Inject(ServiceItemRepository) private readonly repository: ServiceItemRepository
  ) {}

  async execute() {
    console.log(clc.yellowBright('Async GetServiceItemHandler...'));    

    const result = await this.repository.findAll();

    return result;
  }
}

