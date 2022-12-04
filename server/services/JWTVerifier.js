///////////////////////////// Import dependencies ///////////////////////
const NewUserCreator = require('./NewUserCreator');
const jwt = require('jsonwebtoken');
////////////////////////////////////////////////////////////////////////


////////////////////////////////////// Functionalities ////////////////////////////////////////
exports.verifyAndRegister = (username, role, token, secretKey, res) => {
	if (!token) {res.status(401).json({message: 'Undefined token during registration.'});}
	else {
		jwt.verify(token, secretKey, (err, user) => {
			if (err) {res.status(400).json({message: `Invalid token during registration. ${err}.`});}
			else {
				NewUserCreator.createUser(username, role, res);
			}
	});}
}

exports.verifyStaffToken = (token, secretKey) => {
	let isValid;
	jwt.verify(token, secretKey, (err, staff) => {
		if (err) {isValid = false;}
		else {isValid = true;}
	});
	return isValid;
}

exports.verifyCaregiverToken = (token, secretKey) => {
	let isValid;
	jwt.verify(token, secretKey, (err, caregiver) => {
		if (err) {isValid = false;}
		else {isValid = true;}
	});
	return isValid;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
