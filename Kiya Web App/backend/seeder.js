require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const items = [
  { name: "Velvet Matte Lipstick", price: 15, image: "lipstick.jpg", category: "lips" },
  { name: "Glow Liquid Foundation", price: 25, image: "foundation.jpg", category: "face" },
  { name: "Rose Palette", price: 18, image: "eyeshadow.jpg", category: "eyes" },
  { name: "Volumizing Mascara", price: 12, image: "mascara.jpg", category: "eyes" },
  { name: "Cheeky Blush", price: 10, image: "blush.jpg", category: "face" },
  { name: "Eyeliner", price: 17.25, image: "eyeliner.jpg", category: "eyes" },
  { name: "Lipgloss", price: 14, image: "lipgloss.jpg", category: "lips" },
  { name: "Highlighter", price: 18, image: "highlighter.jpg", category: "face" },
  { name: "Compact", price: 20, image: "compact.jpeg", category: "face" },
  { name: "Liquid Concealer", price: 22, image: "cocealer.jpeg", category: "face" },
  { name: "Face Primer", price: 19, image: "primer.jpeg", category: "face" },
  { name: "Liquid Lipstick", price: 20, image: "liqlip.jpeg", category: "lips" },
  { name: "Lilac Eye Palette", price: 29, image: "ep2.jpeg", category: "eyes" },
  { name: "Eyebrow", price: 18, image: "eyebrow.jpg", category: "eyes" },
  { name: "Warm Eye Palette", price: 27, image: "ep3.jpeg", category: "eyes" },
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log('Connected. Seeding products...');
  await Product.deleteMany({});
  await Product.insertMany(items);
  console.log('Done');
  mongoose.disconnect();
}).catch(err => console.error(err));
