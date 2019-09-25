const jwt = require('jsonwebtoken')
const express = require('express')
const routerUsers = express.Router()
const UserSchema = require('.././Schemas/userSchema')
const bcrypt = require('bcryptjs')

// api/users

routerUsers.post('/', async (req, res) => {
	const user = await UserSchema.findOne({ email: req.body.email })
	if (user) return res.status(400).json({ errors: [{ msg: 'User already exists' }] })

	const salt = await bcrypt.genSalt(10)
	const hashPass = await bcrypt.hash(req.body.password, salt)

	newUser = new UserSchema({
		username: req.body.username,
		email: req.body.email,
		password: hashPass
	})
	newUser = await newUser.save()
	jwt.sign(newUser.id, 'secretKey', (err, token) => {
		if (err) throw err
		res.json({ token })
	})
})

routerUsers.get('/', async (req, res) => {
	const users = await UserSchema.find()
	res.json(users)
})

routerUsers.post('/login', async (req, res) => {
	const { email, password } = req.body
	const user = await UserSchema.findOne({ email })

	if (!user) return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })

	const isMatch = await bcrypt.compare(password, user.password)
	if (!isMatch) {
		return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
	}

	jwt.sign(user.id, 'secretKey', (err, token) => {
		res.json({ token })
	})
})

function verifyToken(req, res, next) {
	const bearerHeader = req.headers['authorization']
	if (typeof bearerHeader !== 'undefined') {
		bearer = bearerHeader.split(' ')
		const token = bearer[1]
		req.token = token
		next()
	} else {
		res.sendStatus(403)
	}
}

module.exports.routerUsers = routerUsers
module.exports.verifyToken = verifyToken
