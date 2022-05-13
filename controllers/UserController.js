const mongoose = require("mongoose");
const UserModel = require('../model/user')
exports.update = async (req, res) => {
    const query = req.body.oldemail;
    await UserModel.updateOne({email: query}, {email:req.body.newemail,
    }).then(data => {
        console.log(data)
        if (!data) {
            res.status(404).send({message: `User not found.`});
        }else{
            res.send({ message: "User updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
};