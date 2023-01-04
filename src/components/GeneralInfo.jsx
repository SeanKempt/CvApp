import React from 'react';
import PropTypes from 'prop-types';

class GeneralInfo extends React.Component {
  render() {
    const { handleChange, ...generalInfo } = this.props;
    return (
      <div className="generalinfo">
        <div className="input-container">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            className="firstname"
            value={generalInfo.firstName}
            onChange={handleChange}
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            value={generalInfo.phone}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            value={generalInfo.lastName}
            onChange={handleChange}
          />
          <label htmlFor="emailaddress">Email</label>
          <input
            type="email"
            name="emailaddress"
            value={generalInfo.email}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
}

GeneralInfo.propTypes = {
  generalInfo: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  handleChange: PropTypes.func.isRequired,
};

export default GeneralInfo;
