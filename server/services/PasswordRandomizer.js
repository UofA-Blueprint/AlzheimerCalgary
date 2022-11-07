exports.generate = (length) => {
	const lowerAlphas = "abcdefghijklmnopqrstuvwxyz";  // 26
	const upperAlphas = lowerAlphas.toUpperCase();  // 26
	const digits = "1234567890";  // 10
	const combined = lowerAlphas + upperAlphas + digits;  // 62
	let password = "";
	for (let _ = 1; _ <= length; _++) {
		const index = Math.floor(Math.random() * 62);
		password += combined[index];
	}
	return password;
}