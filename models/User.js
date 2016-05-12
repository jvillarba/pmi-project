var
	mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	bcrypt = require('bcrypt-nodejs')

var userSchema = new Schema({
	admin: Boolean,
	name: {type: String, required: true},
	lastName: String,
	email: {type: String, required: true},
	password: {type: String, required: true},
	street: String,
	city: String,
	state: String,
	zip: Number,
	phone: Number,
	tshirt: String
})

userSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

userSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.password)
}

var User = mongoose.model('User', userSchema)

module.exports = User
