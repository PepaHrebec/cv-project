import React, { Component } from "react";

class Generic extends Component {
  render() {
    const { changeName, changeSurname, changeMail, changePhone } = this.props;

    return (
      <div>
        <label htmlFor="name">First name</label>
        <input type="text" id="name" onChange={changeName} required />
        <label htmlFor="surname">Surname</label>
        <input type="text" id="surname" onChange={changeSurname} required />
        <label htmlFor="mail">Mail</label>
        <input type="mail" id="mail" onChange={changeMail} required />
        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          id="phone"
          onChange={changePhone}
          pattern="[0-9]{9}"
          required
        />
      </div>
    );
  }
}

export { Generic };
