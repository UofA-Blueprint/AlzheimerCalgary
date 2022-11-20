////////////// Import dependencies //////
const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
////////////////////////////////////////


//////// Create a database model //////
const ActivitySchema = new Schema({
	activityType: {
		type: String,
		trim: true,
		required: true,
	},
	activityName: {
		type: String,
		lowercase: true,
		trim: true,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});
///////////////////////////////////


//////////////////////// Exports //////////////////////
module.exports = mongoose.model('Activity', ActivitySchema);
//////////////////////////////////////////////////////