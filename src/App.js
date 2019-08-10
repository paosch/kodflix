import React from 'react';
import piratesimage from './pirates-of-the-caribbean.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={piratesimage} alt="pirates film" />
        <br /><br /><br />
        <div className='container'>
          <div>The Good Life</div>
          <div>Only Fools and Horses</div>
          <div>Blackadder</div>
        </div>
        <div className='container'>
          <div>Bottom</div>
          <div>Faulty Towers</div>
          <div>Yes Minister</div>
        </div>
    </div>
  );
}

export default App;
