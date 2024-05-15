// Services in Nest.js are responsible for encapsulating business logic, performing data manipulation tasks,
// and interacting with external resources such as databases, APIs, or other services.

// app.service.js

// const { Injectable, Inject } = require('@nestjs/common');
// const { MongoService } = require('./mongo.service');

// @Injectable()
// class AppService {
//   constructor(@Inject(MongoService) mongoService) {
//     this.mongoService = mongoService;
//   }

//   async getUsers() {
//     try {
//       await this.mongoService.connect(); // Ensure MongoDB connection is established
//       const usersCollection = this.mongoService.db.collection('users');
//       const users = await usersCollection.find({}).toArray();
//       return users;
//     } catch (error) {
//       console.error('Failed to retrieve users from MongoDB:', error);
//       // Consider returning a more informative error response or status code
//       throw error;
//     }
//   }

//   getHello() {
//     return 'Hello World!';
//   }
// }

// module.exports = AppService;

import { Model } from 'mongoose';
import { Injectable, Dependencies } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Cat } from './schemas/cat.schema';

@Injectable()
@Dependencies(getModelToken(Cat.name))
export class CatsService {
  constructor(catModel) {
    this.catModel = catModel;
  }

  async create(createCatDto) {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll() {
    return this.catModel.find().exec();
  }
}