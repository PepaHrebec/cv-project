import React, { Component } from "react";

class Generic extends Component {
  render() {
    return (
      <div>
        <label htmlFor="name">First name</label>
        <input
          type="text"
          id="name"
          onChange={this.props.changeName}
          required
        />
        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          id="surname"
          onChange={this.props.changeSurname}
          required
        />
      </div>
    );
  }
}

export { Generic };
