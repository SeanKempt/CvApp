import React from 'react';
import PropTypes from 'prop-types';

class PracticalExperience extends React.Component {
  render() {
    const {
      handleChangePractical,
      practicalExperienceInfo,
      addWorkExperience,
    } = this.props;

    return (
      <div>
        {practicalExperienceInfo.map((entry, index) => (
          <div className="practicalexperience" key={index}>
            <div className="input-container">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={entry.companyName}
                onChange={(e) => handleChangePractical(e, index)}
              />
              <label htmlFor="positionTitle">Position title</label>
              <input
                type="text"
                name="positionTitle"
                value={entry.positionTitle}
                onChange={(e) => handleChangePractical(e, index)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="datesWorkedStart">Dates Worked</label>
              <div>
                <input
                  type="date"
                  name="datesWorkedStart"
                  id="workstart"
                  value={entry.datesWorkedStart}
                  onChange={(e) => handleChangePractical(e, index)}
                />
                To
                <input
                  type="date"
                  name="datesWorkedEnd"
                  id="workend"
                  value={entry.datesWorkedEnd}
                  onChange={(e) => handleChangePractical(e, index)}
                />
              </div>
            </div>
            <label htmlFor="workDescription">Work Description</label>
            <textarea
              name="workDescription"
              id="workDescription"
              cols="30"
              rows="10"
              value={entry.workDescription}
              onChange={(e) => handleChangePractical(e, index)}
            />
          </div>
        ))}
        <button type="button" onClick={addWorkExperience}>
          Add Work Experience
        </button>
      </div>
    );
  }
}

PracticalExperience.propTypes = {
  practicalExperienceInfo: PropTypes.array,
  addWorkExperience: PropTypes.func,
  handleChangePractical: PropTypes.func.isRequired,
};

export default PracticalExperience;
