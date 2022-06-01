let mongoose = require('mongoose');
let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true,
        default: 'food'
    },
    category: {
        type: String,
        required:true,
        default: 'pizza',
    },
    image: {
        type: String,
        required: true,
        source:''
    },
    description:{
        type: String,
        required: true,
        default:'',
    },
    code:{
        type: String,
        required: true,
        default:'',
        unique:true
    }
});
let product = new mongoose.model('Product', schema);
module.exports = product;