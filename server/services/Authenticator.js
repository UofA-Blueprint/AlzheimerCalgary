exports.checkUsername = (username) => {
	const maxLength = 20;  // maximum length possible for username
	const minLength = 4;  // minimum length required for username
	return (/^[A-Za-z0-9]*$/.test(username)) && (username.length >= minLength) && (username.length <= maxLength);  // a valid username should not contain non-alphanumeric characters and be within the given range
}

exports.checkRole = (role) => {
	return role === 'staff' || role === 'caregiver';
}

exports.isStaff = (role) => {
	return role === 'staff';
}
exports.isCaregiver = (role) => {
	return role === 'caregiver';
}

/* ------------- This is a dummy function to check staff key used for testing ------------- */
exports.checkStaffKey = (staffKey) => {
	const validStaffKey = 'alpha0505';
	return staffKey === validStaffKey;
}
/* ------------- End of a dummy function to check staff key used for testing ------------- */