const productsModel = require("../models/products")

module.exports.getProducts = async function (req, res, next) {
    try {
        let allProducts = await productsModel.find({});

        res.status(200).send({
            message: "Products fetched successfully",
            products: allProducts
        })
    } catch (error) {
        return res.status(500).send({
            message: error.message,
            error
        })
    }
}


module.exports.getCategoryProducts = async function (req, res, next) {
    const { category } = req.params;
    if (!category) {
        return res.status(400).json({
            message: "Category missing to search products"
        })
    }

    try {

        let allProducts = await productsModel.find({
            category
        });

        res.status(200).send({
            message: "Products fetched successfully",
            products: allProducts
        })
    } catch (error) {
        return res.status(500).send({
            message: error.message,
            error
        })
    }
}

module.exports.getUserDetails = (req, res) => {
    const { username, email, address, cart, purchaseHistory } = req.user;

    res.status(200).json({
        message: "User fetched successfully",
        user: {
            username,
            email,
            address,
            cart,
            purchaseHistory
        }
    })
}