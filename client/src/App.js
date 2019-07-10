import React from 'react';
import './App.css';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <header className='app-header'>
        <MainPage />
      </header>
      <footer>
        <p>T.Swift 2019</p>
      </footer>
    </div>
  );
}

export default App;
