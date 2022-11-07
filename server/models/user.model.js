////////////// Import dependencies //////
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
////////////////////////////////////////


//////// Create a database model //////
const UserSchema = new Schema({
	username: {
		type: String,
		unique: true,
		trim: true,
		required: true,
	},
	role: {
		type: String,
		lowercase: true,
		trim: true,
		required: true,
	},
	hash_password: {
		type: String,
		required: true,
	},
	created: {
		type: Date,
		default: Date.now,
	},
});
///////////////////////////////////


//////////// compare raw password with its hashed version //////////
UserSchema.methods.comparePassword = function(password) {
	return bcrypt.compareSync(password, this.hash_password);
};
///////////////////////////////////////////////////////////////////


//////////////////////// Exports //////////////////////
module.exports = mongoose.model('User', UserSchema);
//////////////////////////////////////////////////////
