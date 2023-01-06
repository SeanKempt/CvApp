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
            name="schoolName"
            value={educationInfo.schoolName}
            onChange={handleChange}
          />
          <label htmlFor="degreeLevel">Degree Level</label>
          <input
            type="text"
            name="degreeLevel"
            value={educationInfo.degreeLevel}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="studyArea">Area of Study</label>
          <input
            type="text"
            name="studyArea"
            value={educationInfo.studyArea}
            onChange={handleChange}
          />
          <label htmlFor="studyDate">Date of Study</label>
          <input
            type="date"
            name="studyDate"
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
    studyArea: PropTypes.string,
    studyDate: PropTypes.string,
  }),
};

export default Education;
