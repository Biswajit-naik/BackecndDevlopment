const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add other CRUD operations here

module.exports = {
  getAllProducts
};
