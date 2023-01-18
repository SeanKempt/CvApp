import React from 'react';
import PropTypes from 'prop-types';

const GeneralInfo = (props) => {
  const { handleChangeGeneral, generalInfo } = props;
  return (
    <div className="generalinfo">
      <div className="input-container">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          className="firstname"
          value={generalInfo.firstName}
          onChange={handleChangeGeneral}
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          value={generalInfo.phone}
          onChange={handleChangeGeneral}
        />
      </div>

      <div className="input-container">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={generalInfo.lastName}
          onChange={handleChangeGeneral}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={generalInfo.email}
          onChange={handleChangeGeneral}
        />
      </div>
    </div>
  );
};

GeneralInfo.propTypes = {
  generalInfo: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  handleChangeGeneral: PropTypes.func.isRequired,
};

export default GeneralInfo;
