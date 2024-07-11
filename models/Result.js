// models/user.js
const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    usn: String,
    name: String,
    cgpa: Number
},{
    collection:'result'
});

const User = mongoose.model('result', resultSchema);
//users is collection here

module.exports = User;
