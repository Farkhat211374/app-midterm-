const mongoose = require("mongoose");
let db = mongoose.connection;
module.exports = async function getUsers(req, res){
    await db.collection('Harm').findOne({}, function (err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
}
