const mongoose = require('mongoose');

//User Schema for MongoDB
const phoneBookSchema = new mongoose.Schema({
    _id: String,
    name: {type: String},
    phone: String
});

mongoose.model('PhoneBook', phoneBookSchema);

module.exports = mongoose.model('PhoneBook');