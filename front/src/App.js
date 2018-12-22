import React, { Component } from "react";
import "./App.css";

import axios from "axios";

class App extends Component {
  state = {
    name: ""
  };

  handleChangeName = e => {
    const value = e.target.value;
    this.setState({ name: value });
  };

  handleSubmit = async e => {
    if (!this.state.name) {
      return;
    }
    const resp = await axios.post("/api/login", {
      name: this.state.name
    });

    console.log(resp);

    e.preventDefault();
    return false;
  };

  render() {
    return (
      <div>
        <header>Enter a name to signup and login</header>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name" />
          <input
            id="name"
            name="name"
            onChange={this.handleChangeName}
            value={this.state.name}
          />
        </form>
      </div>
    );
  }
}

export default App;
