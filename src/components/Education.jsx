import React from 'react';

class Education extends React.Component {
  render() {
    return (
      <div className="education">
        <div className="input-container">
          <label htmlFor="schoolname">School Name</label>
          <input type="text" name="schoolname" />
          <label htmlFor="degreelevel">Degree Level</label>
          <input type="text" name="degreelevel" />
        </div>
        <div className="input-container">
          <label htmlFor="titleofstudy">Area of Study</label>
          <input type="text" name="titleofstudy" />
          <label htmlFor="dateofstudy">Date of Study</label>
          <input type="date" name="dateofstudy" />
        </div>
      </div>
    );
  }
}

export default Education;
