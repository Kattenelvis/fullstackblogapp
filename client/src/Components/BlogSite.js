import React, { useState, useEffect } from "react";
import Blog from "./Blog";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import Axios from "axios";

const baseURL = "http://localhost:5000/api/blogposts/";

function BlogSite({ match }) {
  const [blog, setBlog] = useState({});

  const changeComments = blog => {
    setBlog(blog);
  };

  const commentSubmit = e => {
    e.preventDefault();

    const name = e.target[0].value;
    const comment = e.target[1].value;

    Axios.post(`${baseURL}${match.params.id}/comments`, {
      name,
      comment
    }).then(res => getData());
  };

  const getData = async () => {
    const { data } = await Axios.get(`${baseURL}${match.params.id}`);
    setBlog(data[0]);
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
