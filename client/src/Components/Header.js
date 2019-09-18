import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/blogs">
          <li>Blogs</li>
        </Link>
        <Link to="/editor">
          <li>Make your own Blog</li>
        </Link>
      </ul>
    </div>
  );
}
