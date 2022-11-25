import React, { Component } from "react";

class Generic extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surname: "",
      mail: "",
      phone: "",
    };
  }

  updateState = (e, key) => {
    this.setState({
      [key]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <label htmlFor="name">First name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => {
            this.updateState(e, "name");
          }}
          value={this.state.name}
        />
        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          id="surname"
          onChange={(e) => {
            this.updateState(e, "surname");
          }}
          value={this.state.surname}
        />
        <label htmlFor="mail">Mail</label>
        <input
          type="mail"
          id="mail"
          onChange={(e) => {
            this.updateState(e, "mail");
          }}
          value={this.state.mail}
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          id="phone"
          onChange={(e) => {
            this.updateState(e, "phone");
          }}
          value={this.state.phone}
        />
      </div>
    );
  }
}

export { Generic };
