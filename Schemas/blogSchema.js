const mongoose = require('mongoose')
const Schema = mongoose.Schema
const commentSchema = require('./commentSchema')
mongoose.set('useFindAndModify', false)
const blogSchema = new Schema(
	{
		title: { type: String, required: true },
		body: { type: String, required: true },
		comments: [
			{
				name: { type: String, required: true },
				comment: { type: String, required: true }
			}
		],
		date: { type: Date, default: Date.now },
		likes: { type: Number },
		image: { type: String, required: true }
	},
	{
		timestamps: true
	}
)

module.exports = Blog = mongoose.model('Blog', blogSchema)
