import React from 'react';
import PropTypes from 'prop-types';

class PracticalExperience extends React.Component {
  render() {
    const { handleChangePractical, practicalExperienceInfo } = this.props;
    return (
      <div className="practicalexperience">
        <div className="input-container">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={practicalExperienceInfo.companyName}
            onChange={handleChangePractical}
          />
          <label htmlFor="positiontitle">Position title</label>
          <input
            type="text"
            name="positionTitle"
            value={practicalExperienceInfo.positionTitle}
            onChange={handleChangePractical}
          />
        </div>

        <div className="input-container">
          <label htmlFor="datesworked">Dates Worked</label>
          <div>
            <input
              type="date"
              name="datesworked"
              id="workstart"
              value={practicalExperienceInfo.datesWorkedStart}
              onChange={handleChangePractical}
            />
            To
            <input
              type="date"
              name="datesworked"
              id="workend"
              value={practicalExperienceInfo.datesWorkedEnd}
              onChange={handleChangePractical}
            />
          </div>
        </div>
        <label htmlFor="workdescription">Work Description</label>
        <textarea
          name="workdescription"
          id="workdescription"
          cols="30"
          rows="10"
          value={practicalExperienceInfo.workDescription}
          onChange={handleChangePractical}
        />
      </div>
    );
  }
}

PracticalExperience.propTypes = {
  practicalExperienceInfo: PropTypes.shape({
    companyName: PropTypes.string,
    positionTitle: PropTypes.string,
    datesWorkedStart: PropTypes.string,
    datesWorkedEnd: PropTypes.string,
    workDescription: PropTypes.string,
  }),
  handleChangePractical: PropTypes.func.isRequired,
};

export default PracticalExperience;
