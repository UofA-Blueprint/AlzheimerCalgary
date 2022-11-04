/////////////// Import dependencies ///////////////
const express = require("express");
const cors = require('cors');
// const mongodb = require("mongodb");
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const jsonwebtoken = require('jsonwebtoken');
/////////////////////////////////////////////////


///////////////////////////////////////////// Configurations ////////////////////////////////////////
const app = express();

dotenv.config();

const port = process.env.PORT || 5000;

const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const mongoURI = "mongodb+srv://" + username + ":" + password + "@cluster0.dxhaxm8.mongodb.net/?retryWrites=true&w=majority";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* Test database connection
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
*/


//////////////////////////// Database connection /////////////////////////
mongoose.connect(mongoURI)
.then(
	() => {console.log('Connected successfully to mongodb.');},
	(err) => {console.log(`Failed to connect to mongodb. Error: ${err}`);}
);
/////////////////////////////////////////////////////////////////////////


///////////////////// Import routes ////////////////////
const userRouter = require('./routes/user.route');
///////////////////////////////////////////////////////


///////////////////////////////////////////// Middleware /////////////////////////////////////////////
app.use(cors);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
	if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
		jsonwebtoken.verify(
			req.headers.authorization.split(' ')[1],
			'RESTFULAPIs',
			(err, decode) => {
				if (err) {req.user = undefined;}
				else {req.user = decode;}
				next();
			}
		);
	}
	else {
		req.user = undefined;
		next();
	}
});

app.use('/api/users', userRouter);

app.use((req, res) => {
	res.status(404).send({url: req.originalUrl + 'not found'});
});

app.listen(port, () => {console.log('RESTful API server started on: ' + port + '.');});
////////////////////////////////////////////////////////////////////////////////////////////////////////



///////// Exports /////////
module.exports = app;
//////////////////////////