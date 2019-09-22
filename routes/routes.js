const express = require("express");
const router = express.Router();
let blogPosts = require("../blogpostExamples");
const BlogSchema = require('../blogSchema')

router.get("/", (req, res) => {
  BlogSchema.find().then(items => res.json(items))
});

router.get("/:id", (req, res) => {
  BlogSchema.findById(req.params.id).then(item => res.json(item))
});

router.post("/", (req, res) => {
  const newBlog = new BlogSchema({
    title:req.body.title,
    body:req.body.body,
    image:req.body.image,
    likes:0
  }) 
  
  newBlog.save().then(item => res.json(item))
});

router.patch("/:id", (req, res)  => {
  BlogSchema.findByIdAndUpdate(req.body._id, req.body, e => {
    res.json(e)
  })
});

router.get("/:id/comments", (req, res) => {

  res.json(
    blogPosts.filter(post => post.id === parseInt(req.params.id))[0].comments
  );
});

router.post("/:id/comments", (req, res) => {
  const newComment = {
    id: randomID(),
    name: req.body.name,
    comment: req.body.comment,
    date: new Date(),
    likes:0
  };

  res.send("success");

  blogPosts
    .filter(post => post.id === parseInt(req.params.id))[0]
    .comments.push(newComment);
});

const randomID = () => {
  return Math.floor(Math.random() * 500000000000000);
};

module.exports = router;
