import React, { Component } from "react";
import { Generic } from "./components/general";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      surname: "",
      mail: "",
      phone: null,
    };
  }

  updateState = (e, key) => {
    this.setState({
      [key]: e.target.value,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Generic
          changeName={(e) => {
            this.updateState(e, "name");
          }}
          changeSurname={(e) => {
            this.updateState(e, "surname");
          }}
          changeMail={(e) => {
            this.updateState(e, "mail");
          }}
          changePhone={(e) => {
            this.updateState(e, "phone");
          }}
        />
      </div>
    );
  }
}

export default App;
