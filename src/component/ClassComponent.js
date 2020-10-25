import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(prpos) {
    super(prpos);

    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>
          Count is {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassComponent;