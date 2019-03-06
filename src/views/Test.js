import React, { Component } from "react";
import userService from "http/userService";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { version: "" };
  }
  componentDidMount() {
    this.testHttp();
  }
  testHttp() {
    userService
      .getRequest("testHttp")
      .then(response => {
        // this.setState({
        //   version: response.data.list
        // });
      })
      .catch(error => {});
  }
  render() {
    return <div />;
  }
}

export default Test;
