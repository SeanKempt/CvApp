import React from 'react';
import PropTypes from 'prop-types';

class CvRendered extends React.Component {
  render() {
    const { changeView, generalInfo, educationInfo, practicalExperienceInfo } =
      this.props;
    return (
      <div>
        <div className="resume-wrapper">
          <div className="general">
            <div>
              <h1>
                {generalInfo.firstName} {generalInfo.lastName}
              </h1>
            </div>
            <div>
              <p>{generalInfo.phone}</p>
              <p>{generalInfo.email}</p>
            </div>
          </div>
          <hr />
          <h2 id="work-title">Work Experience</h2>
          <div className="workexperience">
            <h3>{practicalExperienceInfo.companyName}</h3>
            <p>{practicalExperienceInfo.positionTitle}</p>
            <p>
              {`${practicalExperienceInfo.datesWorkedStart} -
                ${practicalExperienceInfo.datesWorkedEnd}`}
            </p>
            <p>{practicalExperienceInfo.workDescription}</p>
          </div>
          <hr />
          <h2 id="education-title">Education</h2>
          <div className="educationInfo">
            <p>{educationInfo.schoolName}</p>
            <p>
              {`${educationInfo.degreeLevel} of ${educationInfo.studyArea}`}
            </p>
            <p>{educationInfo.studyDate}</p>
          </div>
        </div>
        <button type="button" className="edit-btn" onClick={changeView}>
          Edit
        </button>
      </div>
    );
  }
}

CvRendered.propTypes = {
  generalInfo: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
  practicalExperienceInfo: PropTypes.shape({
    companyName: PropTypes.string,
    positionTitle: PropTypes.string,
    datesWorkedStart: PropTypes.string,
    datesWorkedEnd: PropTypes.string,
    workDescription: PropTypes.string,
  }),
  educationInfo: PropTypes.shape({
    schoolName: PropTypes.string,
    degreeLevel: PropTypes.string,
    studyArea: PropTypes.string,
    studyDate: PropTypes.string,
  }),
  changeView: PropTypes.func,
};

export default CvRendered;
