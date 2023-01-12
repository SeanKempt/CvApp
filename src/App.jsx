import React from 'react';
import uniqid from 'uniqid';
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
      practicalExperienceInfo: [
        {
          id: uniqid(),
          companyName: '',
          datesWorkedStart: '',
          datesWorkedEnd: '',
          positionTitle: '',
          workDescription: '',
        },
      ],
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

  // this state handler is passed as a prop to form and then passed to the component as a prop
  handleChangePractical = (name, value, index) => {
    const { practicalExperienceInfo } = this.state;
    practicalExperienceInfo[index][name] = value;
    this.setState({ practicalExperienceInfo });
  };

  addWorkExperience = (e) => {
    e.preventDefault();
    const { practicalExperienceInfo } = this.state;
    const obj = {
      id: uniqid(),
      companyName: '',
      datesWorkedStart: '',
      datesWorkedEnd: '',
      positionTitle: '',
      workDescription: '',
    };
    this.setState({
      practicalExperienceInfo: [...practicalExperienceInfo, obj],
    });
  };

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
            addWorkExperience={this.addWorkExperience}
          />
        </main>
        <footer className="footer">Created by Sean Kempt</footer>
      </div>
    );
  }
}

export default App;
