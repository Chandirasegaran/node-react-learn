
// src/main.js

const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./app.module');
//const MongoService = require('./mongo.service');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //const mongoService = new MongoService();
  //await mongoService.connect(); // Connect to MongoDB
  
  await app.listen(3000);
}
bootstrap();
