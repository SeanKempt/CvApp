import React from 'react';
import PracticalExperience from './PracticalExperience';
import GeneralInfo from './GeneralInfo';
import Education from './Education';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleFirstNameChange = (e) => {
    e.preventDefault();
    this.setState({
      firstName: e.target.value,
    });
  };

  handlePhoneChange = (e) => {
    e.preventDefault();
    this.setState({
      phone: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    e.preventDefault();
    this.setState({
      email: e.target.value,
    });
  };

  render() {
    const { firstName, lastName, phone, email } = this.state;
    return (
      <div className="cvform">
        <form onSubmit={console.log({ phone, email })}>
          <h3>General Information</h3>
          <hr />
          <GeneralInfo
            firstName={firstName}
            lastName={lastName}
            phone={phone}
            email={email}
            firstNameChange={this.handleFirstNameChange}
            phoneChange={this.handlePhoneChange}
            emailChange={this.handleEmailChange}
          />
          <h3>Education</h3>
          <hr />
          <Education />
          <h3>Work Experience</h3>
          <hr />
          <PracticalExperience />
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
