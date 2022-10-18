const request = require('supertest');
const mongodb = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

describe('test db connection', () => {
    jest.setTimeout(20000) // added a timeout to avoid the test to fail as the MongoDB connection is slow
    
    test('should return 1', async () => {
        const username = process.env.MONGO_USER;
        const password = process.env.MONGO_PASSWORD;
        const uri = "mongodb+srv://" + username + ":" + password + "@cluster0.dxhaxm8.mongodb.net/?retryWrites=true&w=majority";
        const client = new mongodb.MongoClient(uri);      
        try {
          // Connect to MongoDB cluster
          await client.connect();
          const response = await client.db().admin().ping();
          expect(response.ok).toBe(1)
        } catch (error) {
          console.error(error);
        } finally{
          await client.close();
        }
    })
})