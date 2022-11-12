///////////////////////////// Import dependencies ///////////////////////
const NewUserCreator = require('./NewUserCreator');
const jwt = require('jsonwebtoken');
////////////////////////////////////////////////////////////////////////


////////////////////////////////////// Functionality ////////////////////////////////////////
exports.verify = (username, role, token, secretKey, res) => {
	if (!token) {res.status(401).json({message: 'Undefined token during registration.'});}
	else {
		jwt.verify(token, secretKey, (err, user) => {
			if (err) {res.status(400).json({message: `Invalid token during registration. ${err}.`});}
			else {
				NewUserCreator.createUser(username, role, res);
			}
	});}
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
