const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    } // _id is the primary key
})

module.exports = mongoose.model('customers', customerSchema);