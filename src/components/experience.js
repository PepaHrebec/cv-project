import React, { Component } from "react";

class Experience extends Component {
  constructor() {
    super();
    this.state = {
      company: "",
      title: "",
      tasks: "",
      onboarding: "",
      leaving: "",
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
        {this.props.clicked ? (
          <div>
            <label htmlFor="company">Company Name:</label>
            <input
              type="text"
              id="company"
              onChange={(e) => {
                this.updateState(e, "company");
              }}
              value={this.state.company}
            />
            <label htmlFor="title">Postition title:</label>
            <input
              type="text"
              id="title"
              onChange={(e) => {
                this.updateState(e, "title");
              }}
              value={this.state.title}
            />
            <label htmlFor="tasks">Main tasks:</label>
            <input
              type="text"
              id="tasks"
              onChange={(e) => {
                this.updateState(e, "tasks");
              }}
              value={this.state.tasks}
            />
            <label htmlFor="onboarding">Date of onboarding:</label>
            <input
              type="number"
              id="onboarding"
              onChange={(e) => {
                this.updateState(e, "onboarding");
              }}
              value={this.state.onboarding}
            />
            <label htmlFor="leaving">Date of leaving:</label>
            <input
              type="number"
              id="leaving"
              onChange={(e) => {
                this.updateState(e, "leaving");
              }}
              value={this.state.leaving}
            />
          </div>
        ) : (
          <div>
            <div>{this.state.company}</div>
            <div>{this.state.title}</div>
            <div>{this.state.tasks}</div>
            <div>{this.state.onboarding}</div>
            <div>{this.state.leaving}</div>
          </div>
        )}
      </div>
    );
  }
}

export { Experience };
