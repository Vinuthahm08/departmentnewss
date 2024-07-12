// models/user.js
const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    usn: String,
    name: String,
    cgpa: Number
},{
    collection:'Result'
});


//users is collection here

module.exports = mongoose.model('Result', resultSchema);
