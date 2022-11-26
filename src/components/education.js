import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();
    this.state = { school: "", faculty: "", studyFinish: "", degree: "" };
  }

  updateState = (e, key) => {
    this.setState({
      [key]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        {this.props.clicked ? (
          <div>
            <label htmlFor="schoolName">School name:</label>
            <input
              type="text"
              id="schoolName"
              onChange={(e) => {
                this.updateState(e, "school");
              }}
              value={this.state.school}
            />
            <label htmlFor="facultyName">Faculty name:</label>
            <input
              type="text"
              id="facultyName"
              onChange={(e) => {
                this.updateState(e, "faculty");
              }}
              value={this.state.faculty}
            />
            <label htmlFor="studyFinish">Studies finished in:</label>
            <input
              type="number"
              id="studyFinish"
              onChange={(e) => {
                this.updateState(e, "studyFinish");
              }}
              value={this.state.studyFinish}
            />
            <label htmlFor="degree">Degree obtained:</label>
            <input
              type="text"
              id="degree"
              onChange={(e) => {
                this.updateState(e, "degree");
              }}
              value={this.state.degree}
            />
          </div>
        ) : (
          <div>
            <div>{this.state.school}</div>
            <div>{this.state.faculty}</div>
            <div>{this.state.studyFinish}</div>
            <div>{this.state.degree}</div>
          </div>
        )}
      </div>
    );
  }
}

export { Education };
