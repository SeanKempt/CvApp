import React, { useState } from 'react';
import uniqid from 'uniqid';
import Form from './components/Form.jsx';

// managing state from this app component as it will serve as the parent for child components
const App = () => {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });
  const [educationInfo, setEducationInfo] = useState({
    schoolName: '',
    degreeLevel: '',
    studyArea: '',
    studyDate: '',
  });
  const [practicalExperienceInfo, setPracticalExperienceInfo] = useState({
    id: uniqid(),
    companyName: '',
    datesWorkedStart: '',
    datesWorkedEnd: '',
    positionTitle: '',
    workDescription: '',
  });
  const [view, setView] = useState('formView');

  /* 
    One handler for each state category/group to alter state when input is changed 
    state handlers are passed as props to the form component
  */
  const handleChangeGeneral = (name, value) => {
    setGeneralInfo((prevState) => ({
      generalInfo: {
        ...prevState.generalInfo,
        [name]: value,
      },
    }));
  };

  const handleChangeEducation = (name, value) => {
    setEducationInfo((prevState) => ({
      educationInfo: {
        ...prevState.educationInfo,
        [name]: value,
      },
    }));
  };

  const handleChangePractical = (name, value, index) => {
    practicalExperienceInfo[index][name] = value;
    setPracticalExperienceInfo({ practicalExperienceInfo });
  };

  // to add additional state entries when end user wants to add additional work experience
  const addWorkExperience = (e) => {
    e.preventDefault();
    const obj = {
      id: uniqid(),
      companyName: '',
      datesWorkedStart: '',
      datesWorkedEnd: '',
      positionTitle: '',
      workDescription: '',
    };
    setPracticalExperienceInfo({
      practicalExperienceInfo: [...practicalExperienceInfo, obj],
    });
  };

  // switches view between the form input and the finalized CV view
  const changeView = () => {
    if (view === 'formView') {
      setView({
        view: 'cvView',
      });
    }
    if (view === 'cvView') {
      setView({
        view: 'formView',
      });
    }
  };

  return (
    <div className="wrapper">
      <header className="header">
        <h1>CV Generator</h1>
      </header>
      <main className="main-content">
        <Form
          currentView={view}
          changeView={changeView}
          handleChangeGeneral={handleChangeGeneral}
          handleChangeEducation={handleChangeEducation}
          handleChangePractical={handleChangePractical}
          generalInfo={generalInfo}
          educationInfo={educationInfo}
          practicalExperienceInfo={practicalExperienceInfo}
          addWorkExperience={addWorkExperience}
        />
      </main>
      <footer className="footer">Created by Sean Kempt</footer>
    </div>
  );
};

export default App;
