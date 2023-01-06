import React from 'react';
import PropTypes from 'prop-types';
import PracticalExperience from './PracticalExperience';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import CvRendered from './CvRendered';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: { firstName: '', lastName: '', phone: '', email: '' },
      educationInfo: {
        schoolName: '',
        degreeLevel: '',
        studyLevel: '',
        studyDate: '',
      },
      practicalExperience: {
        companyName: '',
        datesWorkedStart: '',
        datesWorkedEnd: '',
        workDescription: '',
      },
    };
  }

  handleChange = (e) => {
    const { target } = e;
    const { name } = target;
    e.preventDefault();
    this.setState({
      [name]: e.target.value,
    });
  };

  render() {
    const { generalInfo, educationInfo, practicalExperience } = this.state;
    const { currentView, changeView } = this.props;
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
              practicalExperienceInfo={practicalExperience}
              handleChange={this.handleChange}
            />
            <button
              type="button"
              className="submit-btn"
              onClick={() => {
                console.log(educationInfo);
              }}
            >
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
};

export default Form;
