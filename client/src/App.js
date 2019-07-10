import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <header className='app-header'>
        <MainPage />
      </header>
      <h1>Grocery List Application</h1>
    </div>
  );
}

export default App;
