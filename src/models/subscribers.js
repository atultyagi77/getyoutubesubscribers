const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
  //add name of the subscriber
  name: {
    type: String,
    required: true
  },
  // subscribed channel name by the user
  subscribedChannel: {
    type: String,
    required: true
  },
  // on which date channel is subscribed
  subscribeDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Subscriber', subscriberSchema);
