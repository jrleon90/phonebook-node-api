const mongoose = require('mongoose');

//User Schema for MongoDB
const userSchema = new mongoose.Schema({
    _id: String,
    username: {type: String, unique: true},
    password: String
});

mongoose.model('User', userSchema);

module.exports = mongoose.model('User');