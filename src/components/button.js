import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.clickFoo}>
        {this.props.clicked ? "Submit CV" : "Edit CV"}
      </button>
    );
  }
}

export { Button };
