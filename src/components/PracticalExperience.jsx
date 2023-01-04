import React from 'react';

class PracticalExperience extends React.Component {
  render() {
    return (
      <div className="practicalexperience">
        <div className="input-container">
          <label htmlFor="companyname">Company Name</label>
          <input type="text" name="companyname" />
          <label htmlFor="positiontitle">Position title</label>
          <input type="text" name="positiontitle" />
        </div>

        <div className="input-container">
          <label htmlFor="datesworked">Dates Worked</label>
          <div>
            <input type="date" name="datesworked" id="workstart" />
            To
            <input type="date" name="datesworked" id="workend" />
          </div>
        </div>
        <label htmlFor="workdescription">Work Description</label>
        <textarea
          name="workdescription"
          id="workdescription"
          cols="30"
          rows="10"
        />
      </div>
    );
  }
}

export default PracticalExperience;
