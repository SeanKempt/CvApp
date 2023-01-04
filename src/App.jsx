import React from 'react';
import Form from './components/Form';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <h1>CV Generator</h1>
      </header>
      <main className="main-content">
        <Form />
      </main>
      <footer className="footer">Created by Sean Kempt</footer>
    </div>
  );
}

export default App;
