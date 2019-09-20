import React, { useContext } from "react";
import { Link } from "react-router-dom";
//import { Context } from "../CreateContextTest";

export default function Header() {
  //const [something, setSomething] = useContext(Context);
  return (
  
      <ul className="nav">
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
  
  );
}
