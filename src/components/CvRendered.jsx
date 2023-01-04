import React from 'react';

class CvRendered extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { firstName, lastName } = this.props;
    return (
      <div>
        <h1>
          {firstName}
          {lastName}
        </h1>
      </div>
    );
  }
}

export default CvRendered;
