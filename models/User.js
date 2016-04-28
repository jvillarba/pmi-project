var
    mongoose = require('mongoose'),
    Schema   = mongoose.Schema

var userSchema = new Schema ({
    admin: Boolean,
    name: String,
    lastName: String,
    email: String,
    password: String,
    street: String,
    city: String,
    state: String,
    zip: Number,
    phone: Number
})

var User = mongoose.model('User', userSchema)

module.exports = User
