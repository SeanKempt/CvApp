import React from 'react';
import PropTypes from 'prop-types';
import PracticalExperience from './PracticalExperience';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import CvRendered from './CvRendered';

class Form extends React.Component {
  // passing handle change functions from parent app.jsx to this componenet as props
  handleChangeGeneral = (e) => {
    e.preventDefault();
    const { handleChangeGeneral } = this.props;
    const { target } = e;
    const { name } = target;
    const { value } = target;
    handleChangeGeneral(name, value);
  };

  handleChangeEducation = (e) => {
    e.preventDefault();
    const { handleChangeEducation } = this.props;
    const { target } = e;
    const { name } = target;
    const { value } = target;
    handleChangeEducation(name, value);
  };

  handleChangePractical = (e) => {
    e.preventDefault();
    const { handleChangePractical } = this.props;
    const { target } = e;
    const { name } = target;
    const { value } = target;
    handleChangePractical(name, value);
  };

  render() {
    const {
      currentView,
      changeView,
      generalInfo,
      educationInfo,
      practicalExperienceInfo,
    } = this.props;

    if (currentView === 'formView') {
      return (
        <div className="cvform">
          <form>
            <h3>General Information</h3>
            <hr />
            <GeneralInfo
              generalInfo={generalInfo}
              handleChangeGeneral={this.handleChangeGeneral}
            />
            <h3>Education</h3>
            <hr />
            <Education
              educationInfo={educationInfo}
              handleChangeEducation={this.handleChangeEducation}
            />
            <h3>Work Experience</h3>
            <hr />
            <PracticalExperience
              practicalExperienceInfo={practicalExperienceInfo}
              handleChangePractical={this.handleChangePractical}
            />
            <button type="button" className="submit-btn" onClick={changeView}>
              Submit
            </button>
            <button type="button" className="edit-btn">
              Edit
            </button>
          </form>
        </div>
      );
    }
    if (currentView === 'cvView') {
      return (
        <div>
          <CvRendered
            generalInfo={generalInfo}
            changeView={changeView}
            educationInfo={educationInfo}
            practicalExperienceInfo={practicalExperienceInfo}
          />
        </div>
      );
    }
  }
}

Form.propTypes = {
  currentView: PropTypes.string,
  changeView: PropTypes.func,
  handleChangeGeneral: PropTypes.func,
  handleChangeEducation: PropTypes.func,
  handleChangePractical: PropTypes.func,
  educationInfo: PropTypes.shape({
    schoolName: PropTypes.string.isRequired,
    degreeLevel: PropTypes.string,
    studyTitle: PropTypes.string,
    studyDate: PropTypes.string,
  }),
  generalInfo: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  practicalExperienceInfo: PropTypes.shape({
    companyName: PropTypes.string,
    positionTitle: PropTypes.string,
    datesWorkedStart: PropTypes.string,
    datesWorkedEnd: PropTypes.string,
    workDescription: PropTypes.string,
  }),
};

export default Form;
