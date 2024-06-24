const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Subscriber = require('./models/subscribers');

dotenv.config();  // Load environment variables from .env file

const DATABASE_URL = process.env.MONGODB_URL; // Access the MongoDB URL from the environment variables

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', async () => {
  console.log('Connected to Database');

  // Add sample subscribers in database
  const subscribers = [
    { name: 'Subscriber 1', subscribedChannel: 'Channel 1' },
    { name: 'Subscriber 2', subscribedChannel: 'Channel 2' },
    { name: 'Subscriber 3', subscribedChannel: 'Channel 3' },
  ];

  try {
    await Subscriber.deleteMany();
    await Subscriber.insertMany(subscribers);
    console.log('Database has been initialized with sample data');
  } catch (error) {
    console.error('Error initializing database: ', error);
  } finally {
    mongoose.connection.close();
  }
});
