import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="">
        <header className="">Enter a name to signup and login</header>
        <form method="post" action="/api/login">
          <label htmlFor="name" />
          <input id="name" name="name" />
        </form>
      </div>
    );
  }
}

export default App;
