const { default: mongoose } = require("mongoose");
const { randomUUID } = require('crypto');
const cartSchema = new mongoose.Schema({
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
});

const purchasedItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    date: { type: Date },
    quantity: Number,
    orderId: {
        type: mongoose.Schema.Types.UUID,
        default: () => randomUUID()
    }
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profileImage: String,
    role: {
        type: String,
        default: "user"
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    purchaseHistory: {
        type: [purchasedItemSchema]
    },
    cart: [cartSchema]
})

module.exports = new mongoose.model('Users', userSchema);