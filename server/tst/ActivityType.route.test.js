const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const dotenv = require("dotenv");
dotenv.config();

describe('test /activity_types routes', () => {
	jest.setTimeout(30000) // added a timeout to avoid the test to fail as the MongoDB connection is slow
	
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

	test('random test}', async () => {
		expect(true).toBe(true);
	});

	// Before testing activity type routes, login to get JWT token
	var loginToken;
	test('POST /user/auth/login', async () => {
		const response = await request(app)
		    .post('/user/auth/login')
		    .send({
			username: "binhhandsome",
			password: "Iloveyou3000",
		    });
		expect(response.statusCode).toBe(200);
		expect(response.body.success).toBe(true);
		expect(response.body.token.length >= 1).toBe(true);
		loginToken = response.body.token;
	});

	// Test getAll route to get all activity types here. This should be successful because there are already records in the database.
	test('GET /activity_types/all', async () => {
		const response = await request(app)
			.get('/activity_types/all')
			.send({
				token: loginToken
			});
		expect(response.statusCode).toBe(200);
	});

	// Test create route to create a new activity type here. This should be successful because the activity type below hasn't existed.
	test('POST /activity_types/create', async () => {
		const response = await request(app).
			post('/activity_types/create')
			.send({
				token: loginToken,
				name: "marathon"
			});
		expect(response.statusCode).toBe(200);
		expect(response.body.success).toBe(true);
	});

	// Test another create route to create a new activity type here. This should not be successful because the activity type below already exist.
	test('POST /activity_types/create', async () => {
		const response = await request(app).
			post('/activity_types/create')
			.send({
				token: loginToken,
				name: "marathon"
			});
		expect(response.statusCode).toBe(400);
	});

	// Test update route to change the name of an existing activity type here. This should be successful because the activity type below exists and the new name hasn't existed yet.
	test('PUT /activity_types/update', async () => {
		const response = await request(app).
			put('/activity_types/update')
			.send({
				token: loginToken,
				current_name: "marathon",
				new_name: "running"
			});
		expect(response.statusCode).toBe(200);
		expect(response.body.success).toBe(true);
	});

	// Test update route to change the name of an existing activity type here. This should not be successful because the activity type below doesn't exist.
	test('PUT /activity_types/update', async () => {
		const response = await request(app).
			put('/activity_types/update')
			.send({
				token: loginToken,
				current_name: "soccer",
				new_name: "boxing"
			});
		expect(response.statusCode).toBe(400);
	});

	// Test update route to change the name of an existing activity type here. This should not be successful because the new activity type name already exists.
	test('PUT /activity_types/update', async () => {
		const response = await request(app).
			put('/activity_types/update')
			.send({
				token: loginToken,
				current_name: "marathon",
				new_name: "swimming"
			});
		expect(response.statusCode).toBe(400);
	});

	// Test delete route to delete an activity type here. This should be successful because the activity type exists.
	test('DELETE /activity_types/delete', async () => {
		const response = await request(app).
			delete('/activity_types/delete')
			.send({
				token: loginToken,
				name: "running",
			});
		expect(response.statusCode).toBe(200);
	});

	// Test delete route to delete an activity type here. This should not be successful because the activity type does not exist.
	test('DELETE /activity_types/delete', async () => {
		const response = await request(app).
			delete('/activity_types/delete')
			.send({
				token: loginToken,
				name: "hiking",
			});
		expect(response.statusCode).toBe(400);
	});

	// When all tests are finished, close database connection
	afterAll(async () => {
		// disconnect from mongoDB
		await mongoose.connection.close();
	});

});
