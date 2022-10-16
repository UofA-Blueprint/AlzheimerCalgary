import express from "express";
import {MongoClient} from "mongodb";
import dotenv from "dotenv";

const app = express();
dotenv.config();

async function listDatabases(client){
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function main() {
  const username = process.env.MONGO_USER;
  const password = process.env.MONGO_PASSWORD;
  const uri = "mongodb+srv://" + username + ":" + password + "@cluster0.dxhaxm8.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

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

main().catch(console.error);