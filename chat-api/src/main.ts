import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './config/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: env.CORS_ORIGIN,
      methods: env.CORS_METHODS,
      credentials: env.CORS_CREDENTIALS,
    },
  });
  await app.listen(3333);
}
bootstrap();
