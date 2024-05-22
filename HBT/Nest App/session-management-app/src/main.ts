// import * as session from 'express-session';
// import * as passport from 'passport';
// import { AppModule } from './app.module';
// import { NestFactory } from '@nestjs/core/nest-factory';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   app.use(
//     session({
//       secret: 'your-secret-key',
//       resave: false,
//       saveUninitialized: false,
//       cookie: {
//         maxAge: 60, // 1 hour in milliseconds
//       },
//     }),
//   );

//   app.use(passport.initialize());
//   app.use(passport.session());

//   // other configurations...

//   await app.listen(3000);
// }
// bootstrap();


// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(
    session({
      secret: 'JFKSDJKLDASJF8984J934JF93J98JF98ERJ98E4JG984JGF984J983J9F834',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 3600000, // 1 hour in milliseconds
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  // Enable CORS
  app.use(cors({
    origin: 'http://localhost:5173', // your React app's URL
    credentials: true,
  }));

  await app.listen(3000);
}
bootstrap();
