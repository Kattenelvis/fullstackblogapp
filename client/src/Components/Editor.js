import React from "react";

export default function Editor() {
  return (
    <div>
      <button onClick={changeColor("blue")}>Blue</button>
      <button onClick={changeColor("red")}>Blue</button>
      <div
        contentEditable
        name="richTextField"
        style={{
          width: "80%",
          height: "500px",
          margin: "auto",
          border: "1px solid black"
        }}
      ></div>
      <button>Publish</button>
    </div>
  );
}
