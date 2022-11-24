import React, { Component } from "react";

class Experience extends Component {
  render() {
    const {
      changeCompany,
      changeTitle,
      changeTasks,
      changeOnboarding,
      changeLeaving,
    } = this.props;
    return (
      <div>
        <label htmlFor="schoolName">Company Name:</label>
        <input type="text" id="schoolName" onChange={changeCompany} />
        <label htmlFor="facultyName">Postition title:</label>
        <input type="text" id="facultyName" onChange={changeTitle} />
        <label htmlFor="studyFinish">Main tasks:</label>
        <input type="text" id="studyFinish" onChange={changeTasks} />
        <label htmlFor="degree">Date of onboarding:</label>
        <input type="number" id="degree" onChange={changeOnboarding} />
        <label htmlFor="degree">Date of leaving:</label>
        <input type="number" id="degree" onChange={changeLeaving} />
      </div>
    );
  }
}

export { Experience };
