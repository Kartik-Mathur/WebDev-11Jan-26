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

module.exports.getProductById = async function (req, res, next) {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            message: "id missing to find product"
        })
    }

    try {

        let product = await productsModel.findOne({
            _id: id
        });

        res.status(200).send({
            message: "Product fetched successfully",
            product
        })
    } catch (error) {
        return res.status(500).send({
            message: error.message,
            error
        })
    }
}



module.exports.addToCart = async function (req, res, next) {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            message: "id missing to find product"
        })
    }

    try {

        let product = await productsModel.findOne({
            _id: id
        });

        /*Cart Schema: 
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                default: 1,
            },
            price: Number,
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Products"
            }
        */
        let indx = req.user.cart.findIndex(item => item.productId == id);
        if (indx != -1) {
            req.user.cart[indx].quantity++;
        }
        else {
            req.user.cart.push({
                name: product.name,
                quantity: 1,
                price: product.price,
                productId: product._id
            })
        }

        await req.user.save();

        res.status(200).send({
            message: "Cart updated successfully",
            cart: req.user.cart
        })
    } catch (error) {
        return res.status(500).send({
            message: error.message,
            error
        })
    }
}


module.exports.getCart = async function (req, res, next) {

    try {
        /*Cart Schema: 
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                default: 1,
            },
            price: Number,
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Products"
            }
        */
        let userData = await req.user.populate('cart.productId');
        let cart = userData.cart;
        console.log(cart);
        let totalCartPrice = cart.reduce((acc, item) => item.productId.price * item.quantity + acc, 0);

        res.status(200).send({
            message: "Cart updated successfully",
            cart: userData.cart,
            totalPrice: totalCartPrice
        })
    } catch (error) {
        return res.status(500).send({
            message: error.message,
            error
        })
    }
}