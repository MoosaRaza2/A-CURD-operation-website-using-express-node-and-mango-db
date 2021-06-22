var mongoose = require("mongoose");

var productSchema = mongoose.Schema({

    name: String,
    email: String,
    password: String,
    Gender: String
});

const user = mongoose.model('User', productSchema);

module.exports = user;