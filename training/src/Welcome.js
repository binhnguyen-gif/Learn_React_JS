import React, { Component } from "react";
class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Welcome ! I am a class component {this.props.name}</h1>
      </div>
    );
  }
}
export default Welcome; 