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
        <div>
          <img src={goodlifeimage} alt="good life" />
        </div>
        <div>
          <img src={bottomimage} alt="bottom" />
        </div>
        <div>
          <img src={fawltytowersimage} alt="fawlty towers" />
        </div>
      </div>
      <div className='container'>
        <div>
          <img src={yesministerimage} alt="yes prime minister" />
        </div>
        <div>
          <img src={onlyfoolsimage} alt="only fools" />
        </div>
        <div>
          <img src={blackadderimage} alt="good life" />
        </div>
      </div>
    </div>
  );
}

export default App;
