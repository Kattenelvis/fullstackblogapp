import React from "react";

export default function Blog({ blog }) {
  return (
    <div>
      <div className="blogTitle">
        <h1>{blog.title}</h1>
      </div>
      <div className="blogBody">{blog.body}</div>
      <div className="blogDate">{blog.date}</div>
    </div>
  );
}
