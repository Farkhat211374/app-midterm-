const UserModel = require('../model/user')

exports.create = async (req, res) => {
    if (!req.body.email && !req.body.name && !req.body.password && !req.body.phone) {
        res.send({ message: "Please, fill all the forms!" });
    }

    const user = new UserModel({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        phone: req.body.phone
    });

    await user.save().then(data => {
        res.send({
            message:"User created!",
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
        const user = await UserModel.find();
        res.json(user);
    } catch(error) {
        res.json({message: error.message});
    }
};



exports.findOne = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.json(user);
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

    await UserModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.send({
                message: `User not found.`
            });
        }else{
            res.send({ message: "User updated!" })
        }
    }).catch(err => {
        res.send({
            message: err.message
        });
    });
};



exports.delete = async (req, res) => {
    await UserModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
            res.send({
                message: `User not found.`
            });
        } else {
            res.send({
                message: "User deleted!"
            });
        }
    }).catch(err => {
        res.send({
            message: err.message
        });
    });
};