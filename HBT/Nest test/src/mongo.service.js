// src/mongo.service.js

const { MongoClient } = require('mongodb');
const { url, dbName } = require('./mongo.config');

class MongoService {
  constructor() {
    this.client = new MongoClient(url);
    this.db = null;
  }

  async connect() {
    try {
      await this.client.connect();
      this.db = this.client.db(dbName);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Failed to connect to MongoDB:', error);
    }
  }
}

module.exports = MongoService;
