import React from 'react';
import PracticalExperience from './PracticalExperience';
import GeneralInfo from './GeneralInfo';
import Education from './Education';

class Form extends React.Component {
  constructor() {
    super();
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
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { generalInfo, educationInfo, practicalExperience } = this.state;
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
          <button type="button" className="submit-btn">
            Submit
          </button>
          <button type="button" className="edit-btn">
            Edit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
