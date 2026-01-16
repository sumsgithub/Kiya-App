const express = require('express');
const Wishlist = require('../models/Wishlist');
const router = express.Router();
const { auth } = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
  const list = await Wishlist.findOne({ user: req.user._id }).populate('items');
  res.json(list || { items: [] });
});

router.post('/add', auth, async (req, res) => {
  const { productId } = req.body;
  let list = await Wishlist.findOne({ user: req.user._id }) || new Wishlist({ user: req.user._id, items: [] });
  if (!list.items.find(i => String(i) === productId)) list.items.push(productId);
  await list.save();
  await list.populate('items');
  res.json(list);
});

router.post('/remove', auth, async (req, res) => {
  const { productId } = req.body;
  let list = await Wishlist.findOne({ user: req.user._id });
  if (!list) return res.json({ items: [] });
  list.items = list.items.filter(i => String(i) !== productId);
  await list.save();
  await list.populate('items');
  res.json(list);
});

module.exports = router;
