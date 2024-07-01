Subscriber Management API
This Node.js application manages subscribers stored in a MongoDB Atlas database. It provides RESTful API endpoints for retrieving all subscribers, their names with subscribed channels, and individual subscribers by ID. Additionally, it allows for deleting a subscriber by ID.

Features
Retrieve all subscribers: Get a list of all subscribers.
Retrieve subscribers' names and channels: Get a list of subscribers with only their names and subscribed channels.
Retrieve a subscriber by ID: Get details of a specific subscriber using their ID.
Delete a subscriber by ID: Remove a subscriber from the database using their ID.
Getting Started
Follow these instructions to set up and run the project on your local machine.

Prerequisites
Node.js
npm
MongoDB Atlas account
Installation
Clone the repository:

sh
Copy code
git clone https://github.com/atultyagi77/getyoutubesubscribers
cd getyoutubesubscribers
Install dependencies:

sh
Copy code
npm install
Set up MongoDB Atlas URL:

Create a .env file in the root directory of the project and add the following line:

sh
Copy code
MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase
Replace <username> and <password> with your MongoDB Atlas credentials.

Database Initialization
Initialize the database by running:

sh
Copy code
node src/createDatabase.js
Starting the Server
Start the server with:

sh
Copy code
node src/index.js
The server will start on the port specified in your configuration (default is 3000).

API Endpoints
GET /subscribers: Retrieves all subscribers.
GET /subscribers/names: Retrieves subscribers' names and their subscribed channels.
GET /subscribers/:id: Retrieves a specific subscriber by ID.
DELETE /subscribers/:id: Deletes a subscriber by ID.

Usage Example

To fetch all subscribers:
http://localhost:3000/subscribers


To fetch subscribers' names and channels:
http://localhost:3000/subscribers/names


To fetch a specific subscriber by ID:
http://localhost:3000/subscribers/<id>


To delete a subscriber by ID:
DELETE http://localhost:3000/subscribers/<id>

Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss what you would like to change.

License
This project is licensed under the MIT License.

Acknowledgments
MongoDB Atlas
Node.js
Express.js
