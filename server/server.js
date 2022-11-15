/////////////// Import dependencies ///////////////
const app = require('./app');
const dotenv = require("dotenv");
/////////////////////////////////////////////////

dotenv.config();  // allow access to .env file

const port = process.env.PORT || -100;

app.listen(port, () => console.log('RESTful API server started on: ' + port + '.'));