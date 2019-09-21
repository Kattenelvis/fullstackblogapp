import React from "react";
import Axios from "axios";
import { NONAME } from "dns";

const baseURL = "http://localhost:5000/api/blogposts/";

export default function Editor() {
  const changeColor = e => {
    document.execCommand("styleWithCSS");
    let color = e.target.value;
    document.execCommand("foreColor", false, color);
    setFocus();
  };

  window.addEventListener(
    "load",
    () => {
      document.querySelector("#bold").addEventListener("click", () => {
        document.execCommand("Bold");
        setFocus();
      });
    },
    false
  );

  const publishBlog = e => {
    e.preventDefault();

    const body = e.target.querySelector("#textField").innerHTML;
    const title = e.target[2].value;
    const image = e.target[3].value;

    Axios.post(baseURL, { title, body, image });
  };

  const setFocus = () => {
    document.getElementById("textField").focus();
  };

  return (
    <div>
      <form onSubmit={publishBlog}>
        <input style={{border:"none"}} type="color" onChange={changeColor} />
        <input id="bold" type="button" value="B" className="actionButton-small" />
        <label>
          Title:
          <input maxLength="80" required />
        </label>
        <label>
          Image Link:
          <input required />
        </label>
        <div
          id="textField"
          contentEditable
          name="richTextField"
          style={{
            width: "70%",
            height: "500px",
            margin: "auto",
            border: "1px solid black",
            float: "left"
          }}
        ></div>
        <div></div>
        <button type="submit" className="actionButton">Publish</button>
      </form>
    </div>
  );
}
