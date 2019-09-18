import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import BlogSite from "./Components/BlogSite";
import Editor from "./Components/Editor";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/" exact component={Home} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/blogs/:id" component={BlogSite} />
          <Route path="/editor" component={Editor} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return <div>SWEET HOME ALABAMA</div>;
};

export default App;
