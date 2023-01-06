import React from 'react';
import PropTypes from 'prop-types';

class PracticalExperience extends React.Component {
  render() {
    const { handleChange, ...practicalExperienceInfo } = this.props;
    return (
      <div className="practicalexperience">
        <div className="input-container">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={practicalExperienceInfo.companyName}
            onChange={handleChange}
          />
          <label htmlFor="positiontitle">Position title</label>
          <input type="text" name="positionTitle" />
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

PracticalExperience.propTypes = {
  practicalExperienceInfo: PropTypes.shape({
    companyName: PropTypes.string,
  }),
  handleChange: PropTypes.func.isRequired,
};

export default PracticalExperience;
