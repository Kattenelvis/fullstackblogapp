import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import Blog from "./Components/Blog";
import About from "./Components/About";
import Blogs from "./Components/Blogs";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/" exact component={Home} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/blogs/:id" component={Blog} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return <div>SWEET HOME ALABAMA</div>;
};

export default App;
