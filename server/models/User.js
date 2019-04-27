const { Schema, model } = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')


const UserSchema = new Schema ({
	username: String,
	lastname: String,
	email: String,
	password: String
})

UserSchema.plugin( passportLocalMongoose )

const User = model('User', UserSchema)

module.exports = User