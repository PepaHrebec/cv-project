import React, { Component } from "react";

class Education extends Component {
  render() {
    const { changeSchool, changeFaculty, changeYear, changeDegree } =
      this.props;
    return (
      <div>
        <label htmlFor="schoolName">School name:</label>
        <input type="text" id="schoolName" onChange={changeSchool} />
        <label htmlFor="facultyName">Faculty name:</label>
        <input type="text" id="facultyName" onChange={changeFaculty} />
        <label htmlFor="studyFinish">Studies finished in:</label>
        <input type="number" id="studyFinish" onChange={changeYear} />
        <label htmlFor="degree">Degree obtained:</label>
        <input type="text" id="degree" onChange={changeDegree} />
      </div>
    );
  }
}

export { Education };
