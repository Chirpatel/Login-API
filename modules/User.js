const mongoose = require('mongoose');
const urlSchema =  new mongoose.Schema({
    UserId: String,
    UserName: String,
    Email: String,
    Password: String, 
    date: {type:Date, default: Date.now()}
});

module.exports =  mongoose.model('users',urlSchema);