import React from 'react';
import PracticalExperience from './PracticalExperience';
import GeneralInfo from './GeneralInfo';
import Education from './Education';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <GeneralInfo />
          <Education />
          <PracticalExperience />
          <button type="button" className="edit-btn">
            Edit
          </button>
          <button type="button" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
