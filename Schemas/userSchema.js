const mongoose = require('mongoose')

Schema = mongoose.Schema
const userSchema = new Schema({
	username: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	avatar: { type: String }
})

module.exports = User = mongoose.model('Users', userSchema)
