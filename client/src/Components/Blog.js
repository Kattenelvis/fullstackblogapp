import React, { useState, useEffect } from "react";

export default function Blog({ id }) {
  const [blog, setBlog] = useState({});

  const getData = async () => {
    const data = await fetch(`http://localhost:5000/api/blogposts/${id}`);
    const fetchedBlog = await data.json();
    setBlog(fetchedBlog[0]);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="blogTitle">
        <h1>{blog.title}</h1>
      </div>
      <div className="blogBody">{blog.body}</div>
      <div className="blogDate">{blog.date}</div>
      {/* <Comments comments={blog.comments} /> */}
    </div>
  );
}
