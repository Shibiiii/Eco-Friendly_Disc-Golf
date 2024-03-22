const { User, Product, Order } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find().populate('orders');
      users.forEach((user) => {
        user.orders = user.orders.filter((order) => order.items.length > 0);
      });
      return users;
    },
    user: async (parent, args) => {
      const user = await User.findById(args.id).populate('orders');
      if (!user) {
        throw new Error(`No user found with id: ${args.id}`);
      }
      user.orders = user.orders.filter((order) => order.items.length > 0);
      return user;
    },
    products: async () => {
      return await Product.find();
    },
    product: async (parent, { id }) => {
      return await Product.findById(id);
    },
    orders: async (parent, args, context) => {
      return await Order.find({ user: parent._id })
        .populate('items.product')
        .exec();
    },
    order: async (parent, { id }) => {
      return await Order.findById(id);
    },
    categories: () => ['DISCS', 'BAGS', 'ACCESSORIES', 'APPAREL'],
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
    createOrder: async (parent, { items }, context) => {
      if (context.user) {
        const orderItems = await Promise.all(
          items.map(async (productId) => {
            const product = await Product.findById(productId);
            if (!product) {
              throw new Error(`No product found with id: ${productId}`);
            }
            return { product: product._id, quantity: 1 };
          })
        );

        const order = await Order.create({
          user: context.user._id,
          items: orderItems,
          date: new Date().toISOString(),
          status: 'PENDING',
        });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order._id },
        });

        return await Order.findById(order._id).populate('items.product').exec();
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
      const user = await User.findOne({ email })
        .populate({
          path: 'orders',
          populate: {
            path: 'items.product',
          },
        })
        .exec();

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
