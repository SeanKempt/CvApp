import React from 'react';

class Education extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="schoolname">School Name</label>
        <input type="text" name="schoolname" />

        <label htmlFor="titleofstudy">Title Of Study</label>
        <input type="text" name="titleofstudy" />

        <label htmlFor="dateofstudy">Date Of Study</label>
        <input type="date" name="dateofstudy" />
      </div>
    );
  }
}

export default Education;
