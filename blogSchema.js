const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = require('./commentSchema')

const blogSchema = new Schema(
    {
        title: { type:String, required:true},
        body: { type:String, required:true},
        comments: { type:commentSchema},
        date: { type:Date, default:Date.now},
        likes:{ type:Number},
        image: { type:String, required:true}
    }, {
    timestamps:true
    });

module.exports = Blog = mongoose.model('Blog', blogSchema)