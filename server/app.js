/////////////// Import dependencies ///////////////
const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
/////////////////////////////////////////////////


///////////////////////////////////////////// Configurations ////////////////////////////////////////
const User = require('./models/user.model');  // register schema for model User


const app = express();

dotenv.config();  // allow access to .env file

const port = process.env.PORT || 5000;

const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const mongoURI = "mongodb+srv://" + username + ":" + password + "@cluster0.dxhaxm8.mongodb.net/?retryWrites=true&w=majority";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////// Database connection /////////////////////////
mongoose.connect(mongoURI)
.then(
	() => {console.log('Connected successfully to mongodb.');},
	(err) => {console.log(`Failed to connect to mongodb. Error: ${err}`);}
);
/////////////////////////////////////////////////////////////////////////


///////////////////// Import routes ////////////////////
const userRouter = require('./routes/user.route');
const activityRouter = require('./routes/activity.route')
///////////////////////////////////////////////////////


///////////////////////////////////////////// Middleware /////////////////////////////////////////////
app.use(cors());

app.use(express.json());

app.use('/user', userRouter);
app.use('/activity', activityRouter);

app.use((req, res) => {
	res.status(404).send({url: req.originalUrl + ' not found'});
});
////////////////////////////////////////////////////////////////////////////////////////////////////////



///////// Exports /////////
module.exports = app;
//////////////////////////