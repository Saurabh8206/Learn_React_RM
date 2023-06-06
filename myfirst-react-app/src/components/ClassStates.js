import React from "react";

class ClassStates extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "State",
    };
  }
  demo() {
    this.setState({ data: "Updated State" });
  }
  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <button onClick={() => this.demo()}>Click</button>
      </div>
    );
  }
}
export default ClassStates;
