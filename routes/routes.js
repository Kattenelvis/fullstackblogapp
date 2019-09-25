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
			likes: 0,
			comments: []
		})

		//Send to mongodb database
		newBlog.save().then(item => res.json(item))
	}
)

router.patch('/:id', (req, res) => {
	BlogSchema.findByIdAndUpdate(req.body._id, req.body, e => {
		res.json(e)
	})
})

router.get('/:id/comments', async (req, res) => {
	try {
		const blogComments = await BlogSchema.findById(req.params.id)
		res.json(blogComments.comments)
	} catch {
		res.status(500).json({ msg: 'Server Failure' })
	}
})

router.post('/:id/comments', async (req, res) => {
	const newComment = {
		name: req.body.name,
		comment: req.body.comment,
		likes: 0
	}
	try {
		await BlogSchema.findOneAndUpdate(
			{ _id: req.params.id },
			{
				$push: { comments: newComment }
			}
		)
		res.send('Success')
	} catch (e) {
		console.error(e)
		res.status(500).json({ msg: 'Server Failure' })
	}
})

module.exports = router
