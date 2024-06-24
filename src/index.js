const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();  // Load environment variables from .env file

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.MONGODB_URL; // Access the MongoDB URL from the environment variables

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB Atlas'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
