import React from 'react';
import PropTypes from 'prop-types';
import PracticalExperience from './PracticalExperience';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import CvRendered from './CvRendered';

const Form = (props) => {
  // passing handle change functions from parent app.jsx to this componenet as props and then passing props down to child components as needed
  const handleChangeGeneral = (e) => {
    e.preventDefault();
    const { target } = e;
    const { name } = target;
    const { value } = target;
    handleChangeGeneral(name, value);
  };

  const handleChangeEducation = (e) => {
    e.preventDefault();
    const { target } = e;
    const { name } = target;
    const { value } = target;
    handleChangeEducation(name, value);
  };

  const handleChangePractical = (e, index) => {
    e.preventDefault();
    const { target } = e;
    const { name } = target;
    const { value } = target;
    handleChangePractical(name, value, index);
  };

  const {
    currentView,
    changeView,
    generalInfo,
    educationInfo,
    practicalExperienceInfo,
    addWorkExperience,
  } = props;

  // changes view based on the state of current view allowing for finalized CV to be rendered on same page when submitted
  if (currentView === 'formView') {
    return (
      <div className="cvform">
        <form>
          <h3>General Information</h3>
          <hr />
          <GeneralInfo
            generalInfo={generalInfo}
            handleChangeGeneral={handleChangeGeneral}
          />
          <h3>Education</h3>
          <hr />
          <Education
            educationInfo={educationInfo}
            handleChangeEducation={handleChangeEducation}
          />
          <h3>Work Experience</h3>
          <hr />
          <PracticalExperience
            practicalExperienceInfo={practicalExperienceInfo}
            handleChangePractical={handleChangePractical}
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
