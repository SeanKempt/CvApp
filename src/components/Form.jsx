import React from 'react';
import PropTypes from 'prop-types';
import PracticalExperience from './PracticalExperience';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import CvRendered from './CvRendered';

const Form = (props) => {
  const {
    currentView,
    changeView,
    generalInfo,
    educationInfo,
    practicalExperienceInfo,
    addWorkExperience,
    handleChangeGeneral,
    handleChangeEducation,
    handleChangePractical,
  } = props;
  // passing handle change functions from parent app.jsx to this componenet as props and then passing props down to child components as needed
  const handleChangeGeneralForm = (e) => {
    e.preventDefault();
    const { target } = e;
    const { name } = target;
    const { value } = target;
    handleChangeGeneral(name, value);
  };

  const handleChangeEducationForm = (e) => {
    e.preventDefault();
    const { target } = e;
    const { name } = target;
    const { value } = target;
    handleChangeEducation(name, value);
  };

  // Fix: need to understand what this needs to be changed to. Doesn't seem like its recognizing the event that is being passed
  const handleChangePracticalForm = (e, index) => {
    e.preventDefault();
    const { target } = e;
    const { name } = target;
    const { value } = target;
    handleChangePractical(name, value, index);
  };

  // changes view based on the state of current view allowing for finalized CV to be rendered on same page when submitted
  if (currentView === 'formView') {
    return (
      <div className="cvform">
        <form>
          <h3>General Information</h3>
          <hr />
          <GeneralInfo
            generalInfo={generalInfo}
            handleChangeGeneral={handleChangeGeneralForm}
          />
          <h3>Education</h3>
          <hr />
          <Education
            educationInfo={educationInfo}
            handleChangeEducation={handleChangeEducationForm}
          />
          <h3>Work Experience</h3>
          <hr />
          <PracticalExperience
            practicalExperienceInfo={practicalExperienceInfo}
            handleChangePractical={handleChangePracticalForm}
            addWorkExperience={addWorkExperience}
          />
          <button type="button" className="submit-btn" onClick={changeView}>
            Submit
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
};

Form.propTypes = {
  currentView: PropTypes.string,
  changeView: PropTypes.func,
  handleChangePractical: PropTypes.func,
  handleChangeEducation: PropTypes.func,
  handleChangeGeneral: PropTypes.func,
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
  practicalExperienceInfo: PropTypes.array,
  addWorkExperience: PropTypes.func,
};

export default Form;
