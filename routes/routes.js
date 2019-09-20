const express = require("express");
const router = express.Router();
let blogPosts = require("../blogpostExamples");

router.get("/", (req, res) => {
  res.json(blogPosts);
});

router.get("/:id", (req, res) => {
  res.json(blogPosts.filter(post => post.id === parseInt(req.params.id)));
});

router.post("/", (req, res) => {
  const newMember = {
    id: randomID(),
    title: req.body.title,
    body: req.body.body,
    comments: [],
    views: 6861,
    date: new Date(),
    likes:0,
    image: req.body.image
  };
  res.send({success:true});

  blogPosts.push(newMember);
});

router.patch("/:id", (req, res) => {
  try{
    blogPosts.map(blog => {
      if (blog.id === parseInt(req.params.id)){
        blog.likes = req.body.likes
      }
    })
    res.json({success:true})
  }
  catch(e){
    res.json({success:false, error:e})
  }
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
