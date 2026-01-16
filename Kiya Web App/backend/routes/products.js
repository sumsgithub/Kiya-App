const express = require('express');
const Product = require('../models/Products');
const { auth, adminOnly } = require('../middleware/auth');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  const { category } = req.query;
  const filter = category ? { category } : {};
  const products = await Product.find(filter);
  res.json(products);
});

// Get single product
router.get('/:id', async (req, res) => {
  const p = await Product.findById(req.params.id);
  res.json(p);
});

// ADMIN: Create product
router.post('/', auth, adminOnly, async (req, res) => {
  const p = await Product.create(req.body);
  res.status(201).json(p);
});

// ADMIN: Update product
router.put('/:id', auth, adminOnly, async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// ADMIN: Delete product
router.delete('/:id', auth, adminOnly, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
});

module.exports = router;
