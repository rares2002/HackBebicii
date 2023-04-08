import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as admin from 'firebase-admin';
import fcm from 'fcm-notification';
import { firebaseConfig } from './firebase.config';
import * as serviceAccountCredentials from '../fix-your-budget-firebase-adminsdk-s8wr3-fc2502a1d3.json';

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

  // const serviceAccount = serviceAccountCredentials as admin.ServiceAccount;
  // admin.initializeApp({
  //   credential: admin.credential.cert(serviceAccount)
  //   })
  
  // const FCM = new fcm(serviceAccount);
  // let message = {
  //   android: {
  //       notification: {
  //           title: "Ana",
  //           body: "test",
  //       },
  //   },
  //   token: "anaaaa"
  // };
  // try {
  //   FCM.send(message, (err, resp) => {
  //     if (err) throw err;
  //     console.log("Successfully sent");
  //   })
  // } catch(err) {
  //   console.log(err);
  // }
  await app.listen(process.env.PORT);
  
 
}
bootstrap();
