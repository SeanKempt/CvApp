import React from 'react';
import Form from './components/Form.jsx';

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
        studyArea: '',
        studyDate: '',
      },
      practicalExperienceInfo: {
        companyName: '',
        datesWorkedStart: '',
        datesWorkedEnd: '',
        positionTitle: '',
        workDescription: '',
      },
      view: 'formView',
    };

    this.handleChangeGeneral = this.handleChangeGeneral.bind(this);
    this.handleChangeEducation = this.handleChangeEducation.bind(this);
    this.handleChangePractical = this.handleChangePractical.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  handleChangeGeneral(name, value) {
    this.setState((prevState) => ({
      generalInfo: {
        ...prevState.generalInfo,
        [name]: value,
      },
    }));
  }

  handleChangeEducation(name, value) {
    this.setState((prevState) => ({
      educationInfo: {
        ...prevState.educationInfo,
        [name]: value,
      },
    }));
  }

  handleChangePractical(name, value) {
    this.setState((prevState) => ({
      practicalExperienceInfo: {
        ...prevState.practicalExperienceInfo,
        [name]: value,
      },
    }));
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
            handleChangeGeneral={this.handleChangeGeneral}
            handleChangeEducation={this.handleChangeEducation}
            handleChangePractical={this.handleChangePractical}
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
