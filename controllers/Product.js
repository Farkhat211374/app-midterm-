const ProductModel = require('../model/products')
const bodyParser = require('body-parser');
const UserModel = require("../model/user");
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: true });

exports.create = async (req, res) =>{

    if (!req.body.name && !req.body.type && !req.body.category && !req.body.image && !req.body.description) {
        res.send({ message: "Please, fill all the forms!" });
    }

    const product = new ProductModel({
        name: req.body.name,
        type: req.body.type,
        category: req.body.category,
        image: req.body.image,
        description: req.body.description
    });

    await product.save().then(data=>{
        res.send({
            message:"Product created!",
            user:data
        });
    }).catch(err => {
        res.send({
            message: err.message || "Something went wrong :/ "
        });
    });
};

exports.findAll = async (req, res) => {
    try {
        const product = await ProductModel.find();
        res.json(product);
    } catch(error) {
        res.json({message: error.message});
    }
};

exports.findOne = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id);
        res.json(product);
    } catch(error) {
        res.json({ message: error.message});
    }
};


exports.update = async (req, res) => {
    if(!req.body) {
        res.send({
            message: "Something went wrong"
        });
    }
    const id = req.params.id;

    await ProductModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.send({
                message: `Product not found.`
            });
        }else{
            res.send({ message: "Product updated!" })
        }
    }).catch(err => {
        res.send({
            message: err.message
        });
    });
};


exports.delete = async (req, res) => {
    await ProductModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
            res.send({
                message: `Product not found.`
            });
        } else {
            res.send({
                message: "Product deleted!"
            });
        }
    }).catch(err => {
        res.send({
            message: err.message
        });
    });
};