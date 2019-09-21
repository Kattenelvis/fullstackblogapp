const mongoose = require('mongoose');
const Schema = mongoose.Schema

const commentSchema = new Schema({
    name:{type:String, required:true},
    comment:{type:String, required:true},
    date: {type:Date, default:Date.now}
})

module.exports = commentSchema;