import React from 'react';
import Stack from './Stack';
import goodlifeimage from './images/goodlife.jpg';
import bottomimage from './images/bottom.jpg';
import fawltytowersimage from './images/fawltytowers.jpg';
import onlyfoolsimage from './images/onlyfools.jpg';
import yesministerimage from './images/yesprimeminister.jpg';
import blackadderimage from './images/blackadder.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <br /><br /><br />
      <div className='container'>
        <Stack name='The Good life' image={goodlifeimage}/>
        <Stack name='Bottom' image={bottomimage}/>
        <Stack name='Fawlty Towers' image={fawltytowersimage}/>
      </div>
      <div className='container'>
        <Stack name='Yes, Minister' image={yesministerimage}/>
        <Stack name='Only Fools and Horses' image={onlyfoolsimage}/>
        <Stack name='Blackadder' image={blackadderimage}/>
      </div>
    </div>
  );
}


export default App;
