import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

dotenv.config();

async function bootstrap() {
  let app: INestApplication = null;

  if (process.env.NODE_ENV == 'production') {
    const keyFile = fs.readFileSync(process.env.SSL_PRIVATE_KEY_PATH);
    const certFile = fs.readFileSync(process.env.SSL_CERT_PATH);

    app = await NestFactory.create(AppModule, {
      httpsOptions: {
        key: keyFile,
        cert: certFile,
      },
      cors: true,
    });
  } else {
    app = await NestFactory.create(AppModule, { cors: true });
  }

  app.enableCors();
  app.use(helmet());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT);
}
bootstrap();
