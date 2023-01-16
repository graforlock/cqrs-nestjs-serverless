import { NestFactory } from '@nestjs/core';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';

import { CommandsModule } from './commands/commands.module';
import { QueriesModule } from './queries/queries.module';

let server: Handler;

const bootstrapCommand = async () => {
  const app = await NestFactory.create(CommandsModule);
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const commandHandler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrapCommand());
  return server(event, context, callback);
};

const bootstrapQuery = async () => {
  const app = await NestFactory.create(QueriesModule);
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const queryHandler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrapQuery());
  return server(event, context, callback);
};