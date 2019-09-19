import React from "react";

export default function Blog({ blog }) {

  return (
    <div>
      <div className="blogTitle">
        <h1>{blog.title}</h1>
      </div>
      <div id="blogBody"></div>
      <div className="blogDate">{blog.date}</div>
      <div className="likesCounter">Likes:{blog.likes} <button>Like</button></div>
    </div>
  );
}
