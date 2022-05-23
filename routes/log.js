const path = require("path");
const express = require("express");
const router = express.Router();
const {check} = require('express-validator')
const mongoose = require("mongoose");
let db = mongoose.connection;
const deleteCtrl = require('../controllers/delete')
const getUsersCtrl = require('../controllers/getUsers')
const UserController = require('../controllers/UserController')
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})
router.get('/log', (req,res) => res.render(path.resolve("routes/views/log.ejs")))
router.post('/delete', deleteCtrl)
router.post('/update', UserController.update);
router.get('/getUsers', getUsersCtrl)
module.exports = router
