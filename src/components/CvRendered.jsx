import React from 'react';
import PropTypes from 'prop-types';

class CvRendered extends React.Component {
  render() {
    const { changeView, ...generalInfo } = this.props;
    return (
      <div>
        <h1>
          Hello {generalInfo.firstName} {generalInfo.lastName}
        </h1>
        <p>{`${generalInfo.email} ${generalInfo.phone}`}</p>
        <button type="button" className="edit-btn" onClick={changeView}>
          Edit
        </button>
      </div>
    );
  }
}

CvRendered.propTypes = {
  generalInfo: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
  changeView: PropTypes.func,
};

export default CvRendered;
