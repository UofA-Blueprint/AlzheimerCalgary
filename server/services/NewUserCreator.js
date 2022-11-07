///////////////////////////// Import dependencies ///////////////////////
const bcrypt = require('bcrypt');
const PasswordRandomizer = require('./PasswordRandomizer');
const User = require('../models/user.model');
////////////////////////////////////////////////////////////////////////


////////////////////////////////////// Functionalities ////////////////////////////////////////
exports.createUser = (username, role, res) => {
	const password = PasswordRandomizer.generate(20);
	const hash_password = bcrypt.hashSync(password, 10);  // Hash the raw password so it can be stored in the database later on
	const newUser = new User({username: username, role: role, hash_password: hash_password});
	newUser.save(
		(err, user) => {
			if (err) {
				return res.status(400).send({message: `Failed to save user. Error: ${err}.`});
			}
			else {
				user.hash_password = undefined;
				return res.json({username: username, password: password});
			}
		}
	);
}

/* ------------- This is a dummy function to create a new staff account used for testing ------------- */
exports.createStaff = (username, password, res) => {
	const hash_password = bcrypt.hashSync(password, 10);  // Hash the raw password so it can be stored in the database later on
	const newUser = new User({username: username, role: "staff", hash_password: hash_password});
	newUser.save(
		(err, user) => {
			if (err) {
				return res.status(400).send({message: `Failed to save user. Error: ${err}.`});
			}
			else {
				user.hash_password = undefined;
				return res.json({success: true, username: username});
			}
		}
	);
}
/* ------------- End of a dummy function to create a new staff account used for testing ------------- */
////////////////////////////////////////////////////////////////////////////////////////////