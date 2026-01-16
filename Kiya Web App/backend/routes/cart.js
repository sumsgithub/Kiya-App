const express = require('express');
const Cart = require('../models/Cart');
const Product = require('../models/Products');
const { auth } = require('../middleware/auth');
const router = express.Router();

// get cart for user
router.get('/', auth, async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
  res.json(cart || { items: [] });
});

// add item
router.post('/add', auth, async (req, res) => {
  const { productId, quantity = 1 } = req.body;
  let cart = await Cart.findOne({ user: req.user._id }) || new Cart({ user: req.user._id, items: [] });

  const existing = cart.items.find(i => String(i.product) === productId);
  if (existing) existing.quantity += quantity;
  else cart.items.push({ product: productId, quantity });

  await cart.save();
  await cart.populate('items.product');
  res.json(cart);
});

// update the quantity
router.put('/update', auth, async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ user: req.user._id });
  if (!cart) return res.status(404).json({ message: 'Cart not found' });

  cart.items = cart.items.map(i => (String(i.product) === productId ? { ...i.toObject(), quantity } : i));
  await cart.save();
  await cart.populate('items.product');
  res.json(cart);
});

// remove item
router.post('/remove', auth, async (req, res) => {
  const { productId } = req.body;
  let cart = await Cart.findOne({ user: req.user._id });
  if (!cart) return res.json({ items: [] });

  cart.items = cart.items.filter(i => String(i.product) !== productId);
  await cart.save();
  await cart.populate('items.product');
  res.json(cart);
});

module.exports = router;
