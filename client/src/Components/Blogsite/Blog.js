import React from "react";

export default function Blog({ blog, likeBlog }) {

  return (
    <div className="theBlog">
      <div className="blogTitle">
        <h1>{blog.title}</h1>
      </div>
      <img src={blog.image} className="blogImg" alt=""></img>
      <div id="blogBody"></div>
      <div className="blogDate">{blog.date}</div>
      <div className="likesCounter">Likes:{blog.likes} <button onClick={likeBlog} className="actionButton-small">Like</button></div>
    </div>
  );
}
