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
            {practicalExperienceInfo.map((entry) => (
              <div key={entry.id}>
                <h3>{entry.companyName}</h3>
                <p>{entry.positionTitle}</p>
                <p>
                  {`${entry.datesWorkedStart} -
                    ${entry.datesWorkedEnd}`}
                </p>
                <p>{entry.workDescription}</p>
              </div>
            ))}
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
  practicalExperienceInfo: PropTypes.array,
  educationInfo: PropTypes.shape({
    schoolName: PropTypes.string,
    degreeLevel: PropTypes.string,
    studyArea: PropTypes.string,
    studyDate: PropTypes.string,
  }),
  changeView: PropTypes.func,
};

export default CvRendered;
