const { User, Product, Order } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate('orders');
    },
    user: async (parent, { id }) => {
      return await User.findById(id).populate('orders');
    },
    products: async () => {
      return await Product.find();
    },
    product: async (parent, { id }) => {
      return await Product.findById(id);
    },
    orders: async () => {
      return await Order.find();
    },
    order: async (parent, { id }) => {
      return await Order.findById(id);
    },
  },
  Mutation: {
    createUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);
      return { token, user };
    },
    createProduct: async (
      parent,
      { name, description, price, stock, category, image }
    ) => {
      return await Product.create({
        name,
        description,
        price,
        stock,
        category,
        image,
      });
    },
    createOrder: async (parent, { products, quantities }, context) => {
      if (context.user) {
        const orderItems = await Promise.all(
          products.map(async (productId, index) => {
            const product = await Product.findById(productId);
            return { product, quantity: quantities[index] };
          })
        );
        const order = await Order.create({
          user: context.user._id,
          products: orderItems,
        });
        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order._id },
        });
        return order;
      }
      throw new AuthenticationError('User is not authenticated.');
    },
    updateOrderStatus: async (parent, { id, status }, context) => {
      if (context.user) {
        return await Order.findByIdAndUpdate(id, { status }, { new: true });
      }
      throw new AuthenticationError('User is not authenticated.');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('User not found.');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect password.');
      }
      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
