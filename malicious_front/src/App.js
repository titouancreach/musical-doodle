import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    message: ""
  };

  async componentDidMount() {
    console.log("I try");
    const message = await axios
      .post("http://localhost/api/malicious", {}, { withCredentials: true })
      .then(resp => resp.data.message);
    this.setState({
      message
    });
  }

  render() {
    return <div>{this.state.message}</div>;
  }
}

export default App;
