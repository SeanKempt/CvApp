import React from 'react';
import PropTypes from 'prop-types';

class GeneralInfo extends React.Component {
  render() {
    const {
      firstName,
      lastName,
      phone,
      email,
      firstNameChange,
      phoneChange,
      emailChange,
    } = this.props;
    return (
      <div className="generalinfo">
        <div className="input-container">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            className="firstname"
            value={firstName}
            onChange={firstNameChange}
          />
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" value={phone} onChange={phoneChange} />
        </div>

        <div className="input-container">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" name="lastname" value={lastName} />
          <label htmlFor="emailaddress">Email</label>
          <input
            type="email"
            name="emailaddress"
            value={email}
            onChange={emailChange}
          />
        </div>
      </div>
    );
  }
}

GeneralInfo.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  firstNameChange: PropTypes.func.isRequired,
  phoneChange: PropTypes.func.isRequired,
  emailChange: PropTypes.func.isRequired,
};

export default GeneralInfo;
