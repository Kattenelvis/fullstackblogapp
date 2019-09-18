import React, { useState, useEffect } from "react";
import Blog from "./Blog";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import Axios from "axios";

function BlogSite({ match }) {
  const [blog, setBlog] = useState({});

  const changeComments = blog => {
    setBlog(blog);
  };

  const commentSubmit = e => {
    e.preventDefault();
    Axios.post(
      `http://localhost:5000/api/blogposts/${match.params.id}/comments`,
      {
        name: e.target[0].value,
        comment: e.target[1].value
      }
    );
  };

  const getData = async () => {
    const data = await Axios.get(
      `http://localhost:5000/api/blogposts/${match.params.id}`
    );
    setBlog(data.data[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="BlogSite">
      <Blog blog={blog} changeComments={changeComments.bind(this)} />
      <Comments comments={blog.comments} />
      <CommentForm commentSubmit={commentSubmit.bind(this)} />
    </div>
  );
}

export default BlogSite;
