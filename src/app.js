const express = require('express');
const mongoose = require('mongoose');
const Subscriber = require('./models/subscribers'); // import subscriber model
const path = require('path'); //import path


const app = express();
app.use(express.json());

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '..')));


// Serve the index.html file on the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Route to get all subscribers
app.get('/subscribers', async (req, res) => {
  try {
    // get all the subscribers from the database
    const subscribers = await Subscriber.find();
    //return response with list of subscribers with status 200
    res.status(200).json(subscribers);
  } catch (error) {
    // if error occurs, it returns status 500 with error message
    res.status(500).json({ message: error.message });
  }
});

// Route to get subscribers' names and subscribed channels
app.get('/subscribers/names', async (req, res) => {
  // To retrieve a list of subscribers  
  try {
    
    const subscribers = await Subscriber.find({}, 'name subscribedChannel');
    // returns response with list of subscribers with status 200
    res.status(200).json(subscribers);
  } catch (error) {
    // if error occurs, returns status 500 with error message
    res.status(500).json({ message: error.message });
  }
});

// Route to get a subscriber by id
app.get('/subscribers/:id', async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);
    // if subscriber not found, returns status 400 with error message
    if (subscriber == null) {
      return res.status(400).json({ message: 'Subscriber not found' });
    }
    // return object of subscriber
    res.json(subscriber);
  } catch (error) {
    // if error occurs, returns status 400 with error message
    res.status(400).json({ message: error.message });
  }
});

app.delete('/subscribers/:id', async (req, res) => {
  const subscriberId = req.params.id;

  try {
    const subscriber = await Subscriber.findById(subscriberId);
    // if subscriber not found, returns status 404 with error message
    if (!subscriber) {
      return res.status(404).json({ message: 'Subscriber not found' });
    }
    // if subscriber found by Id, delete the subscriber return status 200 with success msg
    await Subscriber.deleteOne({ _id: subscriberId }); // Use deleteOne to delete one subscriber from database
    res.status(200).json({ message: 'Subscriber deleted successfully' });
  } catch (error) {
    // if error occurs, returns status 500 with error message
    res.status(500).json({ message: error.message });
  }
});

module.exports = app;
