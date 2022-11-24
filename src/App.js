import React, { Component } from "react";
import { Generic } from "./components/general";
import { Education } from "./components/education";
import { Experience } from "./components/experience";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      surname: "",
      mail: "",
      phone: null,
      school: "",
      faculty: "",
      studyFinish: null,
      degree: "",
      company: "",
      title: "",
      tasks: "",
      onboarding: null,
      leaving: null,
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
        <Education
          changeSchool={(e) => {
            this.updateState(e, "school");
          }}
          changeFaculty={(e) => {
            this.updateState(e, "faculty");
          }}
          changeYear={(e) => {
            this.updateState(e, "studyFinish");
          }}
          changeDegree={(e) => {
            this.updateState(e, "degree");
          }}
        />
        <Experience
          changeCompany={(e) => {
            this.updateState(e, "company");
          }}
          changeTitle={(e) => {
            this.updateState(e, "title");
          }}
          changeTasks={(e) => {
            this.updateState(e, "tasks");
          }}
          changeOnboarding={(e) => {
            this.updateState(e, "onboarding");
          }}
          changeLeaving={(e) => {
            this.updateState(e, "leaving");
          }}
        />
      </div>
    );
  }
}

export default App;
