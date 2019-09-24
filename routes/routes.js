const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const BlogSchema = require('.././Schemas/blogSchema')
const { verifyToken } = require('./users')

// /api/blogposts

const app = express()
app.use(express.static('files'))
const fileUpload = require('express-fileupload')
app.use(fileUpload())

router.get('/', (req, res) => {
	BlogSchema.find().then(items => res.json(items))
})

router.get('/:id', (req, res) => {
	BlogSchema.findById(req.params.id).then(item => res.json(item))
})

router.post(
	'/',
	/*verifyToken,*/ (req, res) => {
		let newBlog = {}
		//jwt.verify(req.token, "secretkey", (err, data) => {
		//if (err) res.sendStatus(403);
		//else {

		const file = req.files
		if (file !== undefined) {
			file.mv(`${__dirname}/client/src/uploads/${file.name}`, err => {
				if (err) console.error(err)
			})
		}

		newBlog = new BlogSchema({
			title: req.body.title,
			body: req.body.body,
			image: req.body.image,
			likes: 0
		})

		//Send to mongodb database
		newBlog.save().then(item => res.json(item))
		// }
		//});
	}
)

router.patch('/:id', (req, res) => {
	BlogSchema.findByIdAndUpdate(req.body._id, req.body, e => {
		res.json(e)
	})
})

router.get('/:id/comments', (req, res) => {
	//res.json(blogPosts.filter(post => post.id === parseInt(req.params.id))[0].comments)
})

router.post('/:id/comments', (req, res) => {
	const newComment = {
		id: randomID(),
		name: req.body.name,
		comment: req.body.comment,
		date: new Date(),
		likes: 0
	}

	res.send('success')

	/*blogPosts
		.filter(post => post.id === parseInt(req.params.id))[0]
		.comments.push(newComment)*/
})

const randomID = () => {
	return Math.floor(Math.random() * 500000000000000)
}

module.exports = router
