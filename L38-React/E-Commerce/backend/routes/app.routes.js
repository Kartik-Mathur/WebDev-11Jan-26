const path = require('path');
const express = require('express');
const {
    getProducts,
    getCategoryProducts,
    getUserDetails
} = require('../controllers/app.controller');
const router = express.Router();

// router.get('/add-to-cart',);
// router.get('/buy-cart',);
// router.get('/get-product/:id',);
router.get('/get-products/:category', getCategoryProducts);
router.get('/get-products/', getProducts);
router.get('/get-user-details', getUserDetails);
// router.get('/order-history',);

module.exports = router;