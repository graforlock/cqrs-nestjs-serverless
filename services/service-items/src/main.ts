import { NestFactory } from '@nestjs/core';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';

import { ServiceItemsModule } from './service-items/service-items.module';

let server: Handler;

const bootstrapServiceItems = async () => {
  const app = await NestFactory.create(ServiceItemsModule);
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const serviceItemsHandler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrapServiceItems());
  return server(event, context, callback);
};