const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'customers'
    }
})

module.exports = mongoose.model('orders',orderSchema);