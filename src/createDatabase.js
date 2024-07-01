const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Subscriber = require('./models/subscribers');
const data = require('./data')

// Load environment variables from .env file
dotenv.config();  

// Access the MongoDB URL from the environment variables
const DATABASE_URL = process.env.MONGODB_URL; 

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// connect to database
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', async () => {
  console.log('Connected to Database');

  try {
    await Subscriber.deleteMany({});
    await Subscriber.insertMany(data); //insert the data from data file
    console.log('Database has been initialized with data');
  } catch (error) {
    console.error('Error initializing database: ', error);
  } finally {
    mongoose.connection.close();
  }
});
