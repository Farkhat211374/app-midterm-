const mongoose = require("mongoose");
let db = mongoose.connection;

module.exports = async function deleteUser(req, res){
    let email = req.body.email;
    let data = {
        "email": email
    }
    await db.collection('Harm').deleteOne(data, function (err, collection) {
        if (err) throw err;
        console.log("Record deleted Successfully");

    });
    console.log("server listening at port 7777");
}