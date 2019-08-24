import React from 'react';
import goodlifeimage from './images/goodlife.jpg'
import bottomimage from './images/bottom.jpg'
import fawltytowersimage from './images/fawltytowers.jpg'
import onlyfoolsimage from './images/onlyfools.jpg'
import yesministerimage from './images/yesprimeminister.jpg'
import blackadderimage from './images/blackadder.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='item'>
          <img src={goodlifeimage} alt="good life" />
          <div className="overlay">
            <h1>The Good Life</h1>
          </div>
        </div>
        <div className='item'>
          <img src={bottomimage} alt="bottom" />
          <div className="overlay">
            <h1>Bottom</h1>
          </div>
        </div>
        <div className='item'>
          <img src={fawltytowersimage} alt="fawlty towers" />
          <div className="overlay">
            <h1>Fawlty Towers</h1>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='item'>
          <img src={yesministerimage} alt="yes prime minister" />
          <div className="overlay">
            <h1>Yes Minister</h1>
          </div>
        </div>
        <div className='item'>
          <img src={onlyfoolsimage} alt="only fools" />
          <div className="overlay">
            <h1>Only Fools and Horses</h1>
          </div>
        </div>
        <div className='item'>
          <img src={blackadderimage} alt="good life" />
          <div className="overlay">
            <h1>Blackadder</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
