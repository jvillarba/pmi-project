var
	mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	bcrypt = require('bcrypt-nodejs')

var userSchema = new Schema({
	name: String,
	email: String,
	password: String,
	admin: Boolean
})

userSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

userSchema.method.validPassword = function(password){
	return bcrypt.compareSync(password, this.password)
}

var User = mongoose.model('User', userSchema)

module.exports = User
