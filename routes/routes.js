const express = require("express");
const router = express.Router();
const blogPosts = require("../blogpostExamples");

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
    comments: req.body.comments,
    views: 6861,
    date: new Date()
  };
  res.send("Success!");

  blogPosts.push(newMember);
});

router.put("/:id", (req, res) => {
  res.json(blogPosts.filter(post => post.id === parseInt(req.params.id)));
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
    date: new Date()
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
