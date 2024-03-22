const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
      quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less then 1.'],
      },
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
