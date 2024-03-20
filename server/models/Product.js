const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ['DISCS', 'BAGS', 'ACCESSORIES', 'APPAREL'],
    required: true,
  },
  image: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
