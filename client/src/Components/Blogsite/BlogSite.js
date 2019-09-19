import React, { useState, useEffect } from "react";
import Blog from "./Blog";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import Axios from "axios";

const baseURL = "http://localhost:5000/api/blogposts/";

function BlogSite({ match }) {
  const [blog, setBlog] = useState({});

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
    if (data[0] !== undefined) {
      const blogb = document.getElementById("blogBody");
      blogb.innerHTML = data[0].body;
      setBlog(data[0]);
    }
  };

  const editBlog = newBlog =>{
    Axios.patch(`${baseURL}${blog.id}`, newBlog).then(res=>
    getData())
  }

  const likeBlog = () =>{
    const newBlog = blog;
    newBlog.likes++;
    editBlog(newBlog) 
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="BlogSite">
      <Blog blog={blog} likeBlog={likeBlog.bind(this)} />
      <Comments comments={blog.comments} />
      <CommentForm commentSubmit={commentSubmit.bind(this)} />
    </div>
  );
}

export default BlogSite;
