const mongoose = require('mongoose');
const {Schema} = mongoose;

let userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema);