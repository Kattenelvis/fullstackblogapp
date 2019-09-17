import React, { Component } from "react";

export default class About extends Component {
  constructor() {
    super();
    this.state = { name: "Yeah ABout that", spreadOperator: true };
  }

  changeName(name) {
    this.setState({ ...this.state, name });
  }

  render() {
    return <div>{this.state.name}</div>;
  }
}
