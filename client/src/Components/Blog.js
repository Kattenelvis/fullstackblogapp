import React, { useState, useEffect } from "react";

export default function Blog({ match }) {
  const [blog, setBlog] = useState({});

  const getData = async () => {
    const data = await fetch(
      `http://localhost:5000/api/blogposts/${match.params.id}`
    );
    const fetchedBlog = await data.json();
    setBlog(fetchedBlog[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="blogTitle">{blog.title}</div>
      <div className="blogBody">{blog.body}</div>
      <div className="blogDate">{blog.date}</div>
    </div>
  );
}
