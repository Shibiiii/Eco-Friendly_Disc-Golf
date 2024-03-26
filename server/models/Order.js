const mongoose = require('mongoose');

const { Schema } = require('mongoose');

const orderItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: Number,
});

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  items: [orderItemSchema],
  date: String,
  status: String,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
