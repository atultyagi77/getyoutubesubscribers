import express from 'express';
import mongoose from 'mongoose';

const Subscriber = require('./models/subscribers');
const app = express();

app.use(express.json());

// Route to get all subscribers
app.get('/subscribers', async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get subscribers' names and subscribed channels
app.get('/subscribers/names', async (req, res) => {
  try {
    const subscribers = await Subscriber.find({}, 'name subscribedChannel');
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get a subscriber by id
app.get('/subscribers/:id', async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      return res.status(400).json({ message: 'Subscriber not found' });
    }
    res.json(subscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = app;
