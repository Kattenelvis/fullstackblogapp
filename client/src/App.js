import React from "react";
import "./App.css";
import axios from "axios";

const getData = () => {
  axios
    .get("http://localhost:5000/api/blogposts")
    .then(data => console.log(data.data));
};

getData();

function App() {
  return <div className="App">Hello WOrld</div>;
}

export default App;
