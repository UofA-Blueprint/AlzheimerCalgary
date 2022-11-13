const request = require('supertest')
const mongoose = require('mongoose');
const app = require('../server')

describe('test /user routes', () => {
	jest.setTimeout(20000) // added a timeout to avoid the test to fail as the MongoDB connection is slow
	
	// Start with connecting to our database
	beforeAll(async () => {
		const username = process.env.MONGO_USER;
		const password = process.env.MONGO_PASSWORD;
		const mongoURI = "mongodb+srv://" + username + ":" + password + "@cluster0.dxhaxm8.mongodb.net/?retryWrites=true&w=majority";
		await mongoose.connect(mongoURI, {
		    useNewUrlParser: true,
		    useUnifiedTopology: true,
		})
	});

	// Test login route here. This should be successful.
	var loginToken;  // this is to be used for register route later
	test('POST /user/auth/login -> Should return status 200 and a JSON object like {success: true, token: token}', async () => {
		const response = await request(app)
		    .post('/user/auth/login')
		    .send({
			// send JSON request object to test login route using an existing record in our test database
			username: "testSooraj",
			password: "password12",
		    });
		expect(response.statusCode).toBe(200);
		expect(response.body.success).toBe(true);
		expect(response.body.token.length >= 1).toBe(true);
		loginToken = response.body.token;
	});

	// Test login route here. This should not be successful.
	test('POST /user/auth/login -> Should return status 400 or 401 and a JSON error object with a message', async () => {
		let response;

		// When username doesn't exist
		response = await request(app)
		    .post('/user/auth/login')
		    .send({
			username: "iAmNeitherAStaffNorACaregiver",
			password: "password12",
		    });
		expect(response.statusCode).toBe(401);

		// When password is incorrect
		response = await request(app)
		    .post('/user/auth/login')
		    .send({
			username: "testSooraj",
			password: "myPasswordIsWrong",
		    });
		expect(response.statusCode).toBe(401);

	});

	// Test register route where a logged in staff member creates a new account for another person here. This should be successful.
	test('POST /user/auth/register -> Should return status 200 and a JSON object like {username: someUsername, password: somePassword}', async () => {
		let response;

		response = await request(app)
			.post('/user/auth/register')
			.send({
				username: "iAmANewUser",
				role: "staff",
				token: loginToken
			});
		expect(response.statusCode).toBe(200);
		expect(response.body.username.length >= 1).toBe(true);
		expect(response.body.password.length >= 1).toBe(true);

		const db = mongoose.connection;
		await db.collection('users').deleteOne({"username":"iAmANewUser"});
	});

	// Test register route where a logged in staff member creates a new account for another person here. This should be unsuccessful.
	test('POST /user/auth/register -> Should return status 200 and a JSON object like {username: someUsername, password: somePassword}', async () => {
		let response;

		// Invalid role
		response = await request(app)
			.post('/user/auth/register')
			.send({
				username: "binhTheGreat",
				role: "developer",
				token: loginToken
			});
		expect(response.statusCode).toBe(400);

		// Invalid username with special characters
		response = await request(app)
			.post('/user/auth/register')
			.send({
				username: "binhTheSuperstar$",
				role: "staff",
				token: loginToken
			});
		expect(response.statusCode).toBe(400);

		// Invalid username that shorter than minimum length
		response = await request(app)
			.post('/user/auth/register')
			.send({
				username: "El",
				role: "staff",
				token: loginToken
			});
		expect(response.statusCode).toBe(400);

		// Invalid username that is longer than maximum length
		response = await request(app)
			.post('/user/auth/register')
			.send({
				username: "abcdefghijklmnopqrstuvwxyz",
				role: "staff",
				token: loginToken
			});
		expect(response.statusCode).toBe(400);
		
	});

	// When all tests are finished, close database connection
	afterAll(async () => {
		// disconnect from mongoDB
		await mongoose.connection.close();
	});
})
