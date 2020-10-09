import React from 'react';
import logo from './images/logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Frunchy Restro !!!
        </p>
      </header>
      <footer>
        Frunchy Restro 2020. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
