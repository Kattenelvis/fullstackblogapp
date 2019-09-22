import React, { useState, useEffect } from "react";
import Blog from "./Blog";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import Axios from "axios";

import baseURL from '../../baseURL';

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

  const getData = () => {
    
    Axios.get(`${baseURL}/${match.params.id}`)
    .then(({data}) => {
      if (data !== undefined) {
        const blogb = document.getElementById("blogBody");
        blogb.innerHTML = data.body;
        setBlog(data);
      }}
    );
  };

  const editBlog = newBlog =>{
    Axios.patch(`${baseURL}${blog._id}`, newBlog).then(res=>
    getData())
  }

  const likeBlog = () =>{
    let newBlog = blog;
    newBlog.likes++;
    editBlog(newBlog) 
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="BlogSite">
      <Blog blog={blog} likeBlog={likeBlog.bind(this)} />
      <hr/>
      <Comments comments={blog.comments} />
      <CommentForm commentSubmit={commentSubmit.bind(this)} />
    </div>
  );
}

export default BlogSite;
