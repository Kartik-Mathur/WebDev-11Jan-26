const path = require('path');
const express = require('express');
const usersModel = require('../models/users');
const productsModel = require('../models/products');
const { addProduct, deleteProduct, updateProduct, getUploadedProducts, getProduct } = require('../controllers/admin.controller');
const router = express.Router();

// This will create new product
router.post('/add-product', addProduct);
router.get('/delete-product/:id', deleteProduct);
router.post('/update-product', updateProduct);
router.get('/get-products', getUploadedProducts);
router.get('/get-product/:id', getProduct);

module.exports = router;