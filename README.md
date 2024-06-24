Subscriber Management API
This Node.js application manages subscribers stored in a MongoDB Atlas database. It provides RESTful API endpoints for retrieving all subscribers, their names with subscribed channels, and individual subscribers by ID. Tests are implemented using Mocha, Chai for assertions, and Chai-HTTP for HTTP integration testing. Follow these steps to run the project:

Install dependencies:

npm install

Set up MongoDB Atlas URL in a .env file:

MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase

Initialize the database:

node src/createDatabase.js

Start the server:

node src/index.js