import React from 'react';

class PracticalExperience extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="companyname">Company Name</label>
        <input type="text" name="companyname" />

        <label htmlFor="positiontitle">Position title</label>
        <input type="text" name="positiontitle" />

        <label htmlFor="datesworked">Dates worked</label>
        <input type="date" name="datesworked" />

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
