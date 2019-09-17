import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const getData = async () => {
    const data = await fetch("http://localhost:5000/api/blogposts");
    const blogs = await data.json();
    setBlogs(blogs);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="blogs">
      {blogs.map(blog => {
        return (
          <div key={blog.id} style={{ marginBottom: "20px" }}>
            <Link to={`blogs/${blog.id}`}>{blog.title}</Link> <br />
          </div>
        );
      })}
    </div>
  );
}
