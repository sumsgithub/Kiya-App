const express = require('express');
const Order = require('../models/Order');
const { auth } = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, async (req, res) => {
  const { items, shipping = 10 } = req.body;
  const total = items.reduce((s, it) => s + it.price * it.quantity, 0);
  const order = await Order.create({ user: req.user._id, items, total, shipping });
  res.status(201).json(order);
});

router.get('/', auth, async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate('items.product');
  res.json(orders);
});

module.exports = router;
