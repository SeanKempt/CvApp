import React from 'react';
import PropTypes from 'prop-types';

class Education extends React.Component {
  render() {
    const { handleChange, ...educationInfo } = this.props;
    return (
      <div className="education">
        <div className="input-container">
          <label htmlFor="schoolname">School Name</label>
          <input
            type="text"
            name="schoolname"
            value={educationInfo.schoolName}
            onChange={handleChange}
          />
          <label htmlFor="degreelevel">Degree Level</label>
          <input
            type="text"
            name="degreelevel"
            value={educationInfo.degreeLevel}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="titleofstudy">Area of Study</label>
          <input
            type="text"
            name="titleofstudy"
            value={educationInfo.studyTitle}
            onChange={handleChange}
          />
          <label htmlFor="dateofstudy">Date of Study</label>
          <input
            type="date"
            name="dateofstudy"
            value={educationInfo.studyDate}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
}

Education.propTypes = {
  handleChange: PropTypes.func.isRequired,
  educationInfo: PropTypes.shape({
    schoolName: PropTypes.string.isRequired,
    degreeLevel: PropTypes.string,
    studyTitle: PropTypes.string,
    studyDate: PropTypes.string,
  }),
};

export default Education;
