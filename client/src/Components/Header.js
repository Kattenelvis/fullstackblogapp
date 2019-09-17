import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor() {
    super();
    this.state = { name: "Emil", spreadOperator: true };
  }

  changeName(name) {
    this.setState({ ...this.state, name });
  }

  render() {
    return (
      <Name changeName={this.changeName.bind(this)} name={this.state.name} />
    );
  }
}

class Name extends Component {
  handleChange(e) {
    const name = e.target.value;
    this.props.changeName(name);
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <input onChange={this.handleChange.bind(this)}></input>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/blogs">
            <li>Blogs</li>
          </Link>
        </ul>
      </div>
    );
  }
}
