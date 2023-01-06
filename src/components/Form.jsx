import React from 'react';
import PropTypes from 'prop-types';
import PracticalExperience from './PracticalExperience';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import CvRendered from './CvRendered';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { handleInputChange } = this.props;
    const { target } = e;
    const { name } = target;
    const { value } = target;
    handleInputChange(name, value);
  }

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
              handleChange={this.handleChange}
            />
            <h3>Education</h3>
            <hr />
            <Education
              educationInfo={educationInfo}
              handleChange={this.handleChange}
            />
            <h3>Work Experience</h3>
            <hr />
            <PracticalExperience
              practicalExperienceInfo={practicalExperienceInfo}
              handleChange={this.handleChange}
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
          <CvRendered generalInfo={generalInfo} changeView={changeView} />
        </div>
      );
    }
  }
}

Form.propTypes = {
  currentView: PropTypes.string,
  changeView: PropTypes.func,
  handleInputChange: PropTypes.func,
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
  }),
};

export default Form;
