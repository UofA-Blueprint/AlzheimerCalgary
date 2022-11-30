////////////// Import dependencies //////
const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
////////////////////////////////////////


//////// Create a database model //////
const ClientSchema = new Schema({
	clientName: {
		type: String,
		trim: true,
		required: true,
	},
	clientBirthdate: {
		type: Date,
        trim: true,
		required: true,
	},
});
///////////////////////////////////


//////////////////////// Exports //////////////////////
module.exports = mongoose.model('Client', ClientSchema);
//////////////////////////////////////////////////////