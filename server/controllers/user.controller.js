///////////////////////////// Import dependencies ///////////////////////////////
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const Authenticator = require('../services/Authenticator');
const OnRegisterTokenVerifier = require('../services/OnRegisterTokenVerifier');
const NewUserCreator = require('../services/NewUserCreator');
/////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////// Functions to be executed for HTTP routes ///////////////////////////////////////////
exports.register = (req, res) => {
	const username = req.body.username;
	const role = req.body.role;
	const token = req.body.token;

	if (Authenticator.checkUsername(username) && Authenticator.checkRole(role)) {
		OnRegisterTokenVerifier.verify(username, role, token, process.env.STAFF_SECRET_KEY, res);  // make sure only a staff can register accounts for the caregivers and the clients
	} else {
		return res.status(400).json({message: 'Invalid username or role'});
	}
}

/* ------------------------- This is a dummy log in route for testing ------------------------- */
exports.login = (req, res) => {
	User.findOne(
		{username: req.body.username},
		(err, user) => {
			if (err) {return res.status(500).json({message: `Failed to find user. This doesn't mean the user doesn't exist. Error: ${err}.`});}
			if (!user || !user.comparePassword(req.body.password)) {
				return res.status(401).json({message: 'Authentication failed. Invalid user or password.'});
			} else {
				try {
					let secretKey;
					if (Authenticator.isStaff(user.role)) {secretKey = process.env.STAFF_SECRET_KEY;}
					else if (Authenticator.isCaregiver(user.role)) {secretKey = process.env.CAREGIVER_SECRET_KEY;}
					else {return res.status(400).json({success: false, token: 'undefined'});}

					const accessToken = jwt.sign({username: user.username, role: user.role, _id: user._id}, secretKey);
					return res.json({success: true, token: accessToken});
				} catch (err) {
					return res.status(500).json({message: `Failed to create token. Error: ${err}.`});
				}
			}
		}
	);
}
/* ------------------------- End of a dummy log in route for testing ------------------------- */

/* ------------- This is a dummy sign up route for staff members used for testing ------------- */
exports.sign_up = (req, res) => {
	const username = req.body.username;
	const staffKey = req.body.staffKey;
	const password = req.body.password;

	if (Authenticator.checkUsername(username) && Authenticator.checkStaffKey(staffKey)) {
		NewUserCreator.createStaff(username, password, res);
	} else {res.status(400).json({message: 'Invalid username or staff key.'});}
}
/* ------------- End of a dummy sign up route for staff members used for testing ------------- */

exports.loginRequired = (req, res, next) => {
	if (req.body.token) {next();}
	else {
		return res.status(401).json({message: 'Unauthorized.'});
	}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////