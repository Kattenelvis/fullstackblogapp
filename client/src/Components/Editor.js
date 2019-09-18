import React from "react";
import Axios from "axios";

const baseURL = "http://localhost:5000/api/blogposts/";

export default function Editor() {
  const changeColor = e => {
    document.execCommand("styleWithCSS");
    let color = e.target.value;
    document.execCommand("foreColor", false, color);
  };

  const bold = e => {
    document.execCommand("bold");
  };

  window.addEventListener(
    "load",
    () => {
      document.querySelector("#bold").addEventListener("click", () => {
        document.execCommand("Bold", false, null);
      });
    },
    false
  );

  const publishBlog = e => {
    e.preventDefault();

    const body = e.target.querySelector("#textField").innerHTML;
    const title = e.target[2].value;

    Axios.post(baseURL, { title, body });
  };

  return (
    <div>
      <form onSubmit={publishBlog}>
        <input type="color" onChange={changeColor} />
        <input id="bold" type="button" onChange={bold} value="B" />
        <label>
          Title:
          <input />
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
        <button type="submit">Publish</button>
      </form>
    </div>
  );
}
