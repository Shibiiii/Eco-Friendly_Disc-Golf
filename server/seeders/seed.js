const db = require('../config/connection');
const { User, Product, Category, Order } = require('../models');
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
        'The Banshee is your loyal companion on the course, gliding through the air with unmatched stability. Crafted for precision, its reliable flight path ensures consistent performance, whether you are navigating tight fairways or battling headwinds. With its dependable fade at the end of the flight, the Banshee gives you the confidence to attack every shot with accuracy and control.',
      image: 'Banshee.png',
      category: 'DISCS',
      price: 49.99,
      stock: 50,
    },
    {
      name: 'Blade',
      description:
        'The Blade slices through the air with finesse and speed, delivering unparalleled distance on every throw. Engineered for maximum glide, its sleek profile and balanced weight distribution provide effortless distance with minimal effort. Whether you are a seasoned pro or a beginner honing your skills, the Blade empowers you to unleash your full potential and conquer the course with style.',
      image: 'Blade.png',
      category: 'DISCS',
      price: 44.99,
      stock: 50,
    },
    {
      name: 'Orbit',
      category: 'DISCS',
      description:
        'Step up your game with the Orbit, a versatile mid-range disc designed for precision and control. Its neutral flight path and gentle fade make it ideal for shaping shots with finesse, whether you are navigating tight lines or approaching the basket with confidence. With its reliable stability and comfortable grip, the Orbit offers consistency and accuracy, allowing you to reach new heights in your disc golf journey.',
      image: 'Orbit.png',
      price: 55.99,
      stock: 20,
    },
    {
      name: 'Eagle',
      category: 'DISCS',
      description:
        'Soar to new heights with the Eagle, a powerful fairway driver that combines distance with control. Engineered for long, controlled flights, its high-speed design and reliable fade give you the confidence to attack challenging fairways and reach distant targets with ease. Whether you are shaping lines through tight gaps or unleashing maximum power off the tee, the Eagle delivers the distance and accuracy you need to dominate the course.',
      image: 'Eagle.png',
      price: 39.99,
      stock: 100,
    },
    {
      name: 'Adidas Bag',
      category: 'BAGS',
      description:
        'Elevate your game with the Adidas Disc Golf Backpack, designed for performance and style on the course. Crafted from high-quality materials, this backpack offers durability and comfort for all-day play. With a spacious main compartment and multiple pockets, it provides ample storage for your discs, water bottles, and accessories. The adjustable shoulder straps ensure a customized fit, while the padded back panel offers added support during long rounds. Whether you are a seasoned pro or a casual player, the Adidas Disc Golf Backpack keeps you organized and ready to dominate the fairways.',
      image: 'Bag1.png',
      price: 99.99,
      stock: 100,
    },
    {
      name: 'Nike Bag',
      category: 'BAGS',
      description:
        'Take your game to the next level with the Nike Disc Golf Sling Bag, engineered for comfort and convenience on the course. Featuring a sleek and ergonomic design, this sling bag allows you to move freely while keeping your discs and essentials within easy reach. The adjustable strap ensures a secure and comfortable fit, while the ventilated back panel keeps you cool during intense rounds. With its minimalist yet functional layout, the Nike Disc Golf Sling Bag is the perfect choice for players who prioritize mobility and efficiency.',
      image: 'Bag2.png',
      price: 149.99,
      stock: 30,
    },
    {
      name: 'Innova Bag',
      category: 'BAGS',
      description:
        'Experience unparalleled performance and organization with the Innova Disc Golf Cart Bag, the ultimate companion for serious disc golfers. Designed to fit seamlessly onto disc golf carts, this bag offers a wealth of storage options for discs, accessories, and personal items. The rugged construction and reinforced stitching ensure durability and longevity, while the padded straps and handles provide comfort during transportation. With its intuitive layout and innovative features, the Innova Disc Golf Cart Bag is the perfect choice for players who demand the best.',
      image: 'InnovaBag.png',
      price: 199.99,
      stock: 30,
    },
    {
      name: 'Grip Bag',
      category: 'BAGS',
      description:
        'Unleash your full potential on the course with the Grip EQ Disc Golf Backpack, a premium bag built for elite performance and durability. Meticulously crafted from top-quality materials, this backpack combines functionality with style to meet the demands of competitive play. With its ergonomic design and adjustable features, it offers unparalleled comfort and support during long rounds. The customizable storage options and intuitive layout ensure easy access to your discs and accessories, allowing you to focus on your game without distraction. Whether you are a professional competitor or a dedicated enthusiast, the Grip EQ Disc Golf Backpack sets the standard for excellence on the fairways.',
      image: 'GripBag.png',
      price: 89.99,
      stock: 100,
    },
    {
      name: 'Innova Glove',
      category: 'ACCESSORIES',
      description:
        'Introducing the Innova Pro-Line Disc Golf Glove, engineered for precision and performance on the course. Crafted from premium materials, this glove offers superior grip and control in all weather conditions. The breathable construction keeps your hands cool and comfortable, while the reinforced palm provides added durability and protection. With its ergonomic design and flexible fit, the Innova Pro-Line Glove ensures a natural feel and optimal performance on every throw.',
      image: 'Glove1.png',
      price: 49.99,
      stock: 150,
    },
    {
      name: 'Grip Glove',
      category: 'ACCESSORIES',
      description:
        'Dominate the fairways with the Grip EQ Pro Series Disc Golf Glove, the choice of champions worldwide. Engineered for maximum grip and durability, this glove features a tacky palm surface that enhances control and consistency in any playing conditions. The breathable fabric and flexible design ensure comfort and mobility throughout your round, while the reinforced stitching provides long-lasting performance. Whether you are driving off the tee or sinking putts in the clutch, the Grip EQ Pro Series Glove delivers the confidence and reliability you need to excel on the course.',
      image: 'Glove2.png',
      price: 29.99,
      stock: 200,
    },
    {
      name: 'Nike Glove',
      category: 'ACCESSORIES',
      description:
        'Stay cool and focused on your game with the Nike Dri-FIT Disc Golf Glove, designed for comfort and performance in any weather. Constructed with moisture-wicking fabric, this glove keeps your hands dry and comfortable, allowing you to maintain a secure grip on your discs. The lightweight and breathable design ensure unrestricted movement and flexibility, while the reinforced palm provides durability and protection. Whether you are battling the elements or chasing birdies, the Nike Dri-FIT Glove keeps you comfortable and confident from the first tee to the final putt.',
      image: 'Glove3.png',
      price: 69.99,
      stock: 100,
    },
    {
      name: 'Adidas Glove',
      category: 'ACCESSORIES',
      description:
        'Elevate your game with the Adidas AdiZero Disc Golf Glove, engineered for maximum performance and style on the course. Featuring a lightweight and flexible design, this glove offers a natural feel and superior grip for enhanced control and accuracy. The breathable fabric and moisture-wicking technology keep your hands dry and comfortable, while the reinforced palm provides durability and protection. Whether you are driving off the tee or navigating tight fairways, the Adidas AdiZero Glove delivers the comfort and confidence you need to succeed on every shot.',
      image: 'Glove4.png',
      price: 89.99,
      stock: 50,
    },
    {
      name: 'Nike Shirt',
      category: 'APPAREL',
      description:
        'Stay cool and focused on the course with the Nike Dri-FIT Disc Golf Shirt. Engineered with moisture-wicking technology, this shirt keeps you dry and comfortable throughout your round, even on the hottest days. The lightweight and breathable fabric allows for unrestricted movement, while the stylish design ensures you look and feel your best on the fairways. Whether you are driving off the tee or sinking putts on the green, the Nike Dri-FIT Disc Golf Shirt provides the performance and style you need to excel on the course.',
      image: 'Shirt1.png',
      price: 29.99,
      stock: 200,
    },
    {
      name: 'Adidas Shirt',
      category: 'APPAREL',
      description:
        'Conquer the course in comfort with the Adidas Climacool Disc Golf Shirt. Designed with innovative Climacool technology, this shirt provides superior ventilation and moisture management, keeping you cool and dry in any conditions. The lightweight fabric and athletic fit offer freedom of movement, while the stylish design adds a touch of flair to your game. Whether you are teeing off or navigating the fairways, the Adidas Climacool Disc Golf Shirt helps you stay focused and perform at your best.',
      image: 'Shirt2.png',
      price: 29.99,
      stock: 150,
    },
    {
      name: 'Puma Shirt',
      category: 'APPAREL',
      description:
        'Make a statement on the course with the Puma Fusion Disc Golf Shirt. Crafted from high-quality materials, this shirt combines style and performance for the modern disc golfer. The moisture-wicking fabric keeps you dry and comfortable, while the ergonomic design allows for a full range of motion on every throw. With its bold colors and dynamic patterns, the Puma Fusion Disc Golf Shirt lets you stand out from the crowd while showcasing your skills on the fairways.',
      image: 'Shirt3.png',
      price: 19.99,
      stock: 250,
    },
    {
      name: 'Under Armor Shirt',
      category: 'APPAREL',
      description:
        'Elevate your game with the Under Armour Playoff Disc Golf Polo. Engineered for performance and comfort, this polo features UA signature HeatGear fabric, which wicks away sweat and dries quickly to keep you cool and dry throughout your round. The four-way stretch construction allows for unrestricted movement, while the anti-odor technology keeps you feeling fresh from tee to green. With its classic polo design and athletic fit, the Under Armour Playoff Disc Golf Polo combines style and functionality for a winning combination on the course.',
      image: 'Shirt4.png',
      price: 24.99,
      stock: 175,
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
      password: 'password54321',
    },
  ]);

  console.log('users seeded');

  const orders = await Order.create([
    {
      purchaseDate: new Date().toISOString(),
      products: [
        { product: products[0]._id, quantity: 2 },
        { product: products[1]._id, quantity: 1 },
      ],
      user: users[0]._id,
      status: 'PENDING',
      total: products[0].price * 2 + products[1].price,
    },
  ]);

  console.log('orders seeded');

  process.exit();
});
