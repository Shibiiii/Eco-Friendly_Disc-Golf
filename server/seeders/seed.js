const db = require('../config/connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');
  await cleanDB('Order', 'orders');

  const categories = await Category.insertMany([
    { name: 'Discs' },
    { name: 'Bags' },
    { name: 'Accessories' },
    { name: 'Apparel' },
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: 'Banshee',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '*jpg placholder*',
      category: 'Discs',
      price: 49.99,
      stock: 50,
    },
    {
      name: 'Blade',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: '*jpg placeholder*',
      category: 'Discs',
      price: 44.99,
      stock: 50,
    },
    {
      name: 'Orbit',
      category: 'Discs',
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: '*jpg placeholder*',
      price: 55.99,
      stock: 20,
    },
    {
      name: 'Eagle',
      category: 'Discs',
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: '*jpg placeholder*',
      price: 39.99,
      stock: 100,
    },
    {
      name: 'Adidas Bag',
      category: 'Bags',
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: '*jpg placeholder*',
      price: 99.99,
      stock: 100,
    },
    {
      name: 'Nike Bag',
      category: 'Bags',
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: '*jpg placeholder*',
      price: 149.99,
      stock: 30,
    },
    {
      name: 'Innova Bag',
      category: 'Bags',
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: '*jpg placeholder*',
      price: 199.99,
      stock: 30,
    },
    {
      name: 'Grip Bag',
      category: 'Bags',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: '*jpg placeholder*',
      price: 89.99,
      stock: 100,
    },
    {
      name: 'Innova Glove',
      category: 'Accessories',
      description:
        'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: '*jpg placeholder*',
      price: 49.99,
      stock: 150,
    },
    {
      name: 'Grip Glove',
      category: 'Accessories',
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: '*jpg placeholder*',
      price: 29.99,
      stock: 200,
    },
    {
      name: 'Nike Glove',
      category: 'Accessories',
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: '*jpg placeholder*',
      price: 69.99,
      stock: 100,
    },
    {
      name: 'Adidas Glove',
      category: 'Accessories',
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: '*jpg placeholder*',
      price: 89.99,
      stock: 50,
    },
    {
      name: 'Nike Shirt',
      category: 'Apparel',
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: '*jpg placeholder*',
      price: 29.99,
      stock: 200,
    },
    {
      name: 'Adidas Shirt',
      category: 'Apparel',
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: '*jpg placeholder*',
      price: 29.99,
      stock: 150,
    },
    {
      name: 'Puma Shirt',
      category: 'Apparel',
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: '*jpg placeholder*',
      price: 39.99,
      stock: 100,
    },
    {
      name: 'Champion Shirt',
      category: 'Apparel',
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: '*jpg placeholder*',
      price: 19.99,
      stock: 250,
    },
  ]);

  console.log('products seeded');

  const users = await User.create([
    {
      firstName: 'Goose',
      lastName: 'Smith',
      email: 'goose@testmail.com',
      password: 'password12345',
    },
    {
      firstName: 'Flyn',
      lastName: 'Tron',
      email: 'InlikeFlyn@testmail.com',
      password: 'password12345',
    },
  ]);

  console.log('users seeded');

  const orders = await Order.create([
    {
      purchaseDate: new Date().toISOString(),
      products: [products[0]._id, products[0]._id, products[1]._id],
      user: users[0]._id,
    },
  ]);

  console.log('orders seeded');

  process.exit();
});
