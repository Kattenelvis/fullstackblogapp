const express = require('express')
const moment = require('moment')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

//Mongoose
const { ATLAS_URI } = require('./key')
mongoose.connect(ATLAS_URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
})
const connection = mongoose.connection
connection.once('open', () => {
	console.log('MongoDB database connection established')
})

const logger = (req, res, next) => {
	console.log(
		`${req.protocol}://${req.get('host')}${req.originalUrl} at ${moment().format()}`
	)
	next()
}

app.use('/api/blogposts', require('./routes/routes'))
const { routerUsers } = require('./routes/users')
app.use('/api/users', routerUsers)

app.use(logger)

//ONLY USE THIS IN PRODUCTION
/*app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})*/

const port = process.env.PORT || 5001
app.listen(port, () => console.log(`Server started on ${port}`))

//  res.sendFile(path.join(__dirname), "public", "index.html");
