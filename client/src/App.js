import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import BlogSite from "./Components/Blogsite/BlogSite";
import Editor from "./Components/Editor";
import { ContextProvider, Context } from "./Components/CreateContextTest";

function App() {
  return (
    <div className="App">
      <Router>
        <ContextProvider>
          <Header />
          <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/" exact component={Home} />
            <Route path="/blogs" exact component={Blogs} />
            <Route path="/blogs/:id" component={BlogSite} />
            <Route path="/editor" component={Editor} />
          </Switch>
        </ContextProvider>
      </Router>
    </div>
  );
}

const Home = () => {
  return <div>SWEET HOME ALABAMA</div>;
};

export default App;
