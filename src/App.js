import React, { Component } from "react";
import { Generic } from "./components/generic";
import { Education } from "./components/education";
import { Experience } from "./components/experience";
import { Button } from "./components/button";

class App extends Component {
  constructor() {
    super();
    this.state = {
      clicked: true,
    };
  }

  clickFoo = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
    }));
  };

  render() {
    return (
      <div>
        <Generic />
        <Education />
        <Experience />
        <Button clicked={this.state.clicked} clickFoo={this.clickFoo} />
      </div>
    );
  }
}

export default App;
