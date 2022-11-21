import React, { Component } from "react";
import { Generic } from "./components/general";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      surname: "",
    };
  }

  changeNameValue = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  changeSurnameValue = (e) => {
    this.setState({
      surname: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Generic
          changeName={this.changeNameValue}
          changeSurname={this.changeSurnameValue}
        />
      </div>
    );
  }
}

export default App;
