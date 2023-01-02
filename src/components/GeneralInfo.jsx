import React from 'react';

class GeneralInfo extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="firstname">First Name</label>
        <input type="text" name="firstname" className="firstname" />

        <label htmlFor="lastname">Last Name</label>
        <input type="text" name="lastname" />

        <label htmlFor="phone">Phone Number</label>
        <input type="tel" name="phone" />

        <label htmlFor="emailaddress">Email</label>
        <input type="email" name="emailaddress" />
      </div>
    );
  }
}

export default GeneralInfo;
