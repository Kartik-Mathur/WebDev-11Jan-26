const path = require('path');
const express = require('express');
const usersModel = require('../models/users');
const productsModel = require('../models/products');
const router = express.Router();

// This will create new product
router.post('/add-product', async (req, res, next) => {
    const {
        name,
        price,
        description,
        imageUrl,
        rating
    } = req.body;

    if (!name || !price) {
        return res.status(400).json({
            message: "Name and price are mandatory"
        })
    }

    try {
        let product = await productsModel.create({
            name,
            price,
            description: description || "NA",
            imageUrl: imageUrl || "",
            rating: 0,
            adminId: req.user._id
        })

        res.status(200).json({
            message: "Product added successfully",
            product
        })
    } catch (error) {
        return res.status(500).status({
            message: error.message,
            error
        })
    }
});



module.exports = router;