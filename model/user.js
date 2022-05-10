let mongoose = require('mongoose');
let schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        default: 'user123'
    },
    password: {
        type: String,
        required: true,
        default: 'pass123'
    },
    phone: String,
});
let user = new mongoose.model('User', schema);
module.exports = user;