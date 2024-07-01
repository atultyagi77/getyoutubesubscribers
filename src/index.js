const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

// Load environment variables from .env file
dotenv.config();  

 // Access the PORT from the environment variables or set the port 3000
const PORT = process.env.PORT || 3000;

 // Access the MongoDB URL from the environment variables
const DATABASE_URL = process.env.MONGODB_URL;

mongoose.connect(DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000, // timeout to 30 seconds
        socketTimeoutMS: 45000
    });


// Connect to DATABASE
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB Atlas'));

// Server start on port 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
