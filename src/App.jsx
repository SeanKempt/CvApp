import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
      },
      educationInfo: {
        schoolName: '',
        degreeLevel: '',
        studyLevel: '',
        studyDate: '',
      },
      practicalExperienceInfo: {
        companyName: '',
        datesWorkedStart: '',
        datesWorkedEnd: '',
        workDescription: '',
      },
      view: 'formView',
    };

    this.handleChange = this.handleChange.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  handleChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  changeView() {
    const { view } = this.state;
    if (view === 'formView') {
      this.setState({
        view: 'cvView',
      });
    }
    if (view === 'cvView') {
      this.setState({
        view: 'formView',
      });
    }
  }

  render() {
    const { view, generalInfo, educationInfo, practicalExperienceInfo } =
      this.state;
    return (
      <div className="wrapper">
        <header className="header">
          <h1>CV Generator</h1>
        </header>
        <main className="main-content">
          <Form
            currentView={view}
            changeView={this.changeView}
            handleInputChange={this.handleChange}
            generalInfo={generalInfo}
            educationInfo={educationInfo}
            practicalExperienceInfo={practicalExperienceInfo}
          />
        </main>
        <footer className="footer">Created by Sean Kempt</footer>
      </div>
    );
  }
}

export default App;
