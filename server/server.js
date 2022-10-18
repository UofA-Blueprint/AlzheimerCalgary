const express = require("express");
const mongodb = require("mongodb");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const listDatabases = async (client) => {
  const databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

const run = async () => {
  const username = process.env.MONGO_USER;
  const password = process.env.MONGO_PASSWORD;
  const uri = "mongodb+srv://" + username + ":" + password + "@cluster0.dxhaxm8.mongodb.net/?retryWrites=true&w=majority";
  const client = new mongodb.MongoClient(uri);

  try {
    // Connect to MongoDB cluster
    await client.connect();
    await listDatabases(client);
  } catch (error) {
    console.error(error);
  } finally{
    await client.close();
  }

}

run().catch(console.error);
module.exports = app;