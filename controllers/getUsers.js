const mongoose = require("mongoose");
let db = mongoose.connection;
module.exports = async function getUsers(req, res){
    var Useremail = req.query.email;
    await db.collection('Harm').findOne({email: Useremail}, function (err, result) {
        if (err) throw err;
        res.send( {message: result + " is exist"});
        db.close();
    });
}