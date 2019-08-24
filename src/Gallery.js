import React from 'react';
import Show from './Show';
import goodlifeimage from './images/goodlife.jpg';
import bottomimage from './images/bottom.jpg';
import fawltytowersimage from './images/fawltytowers.jpg';
import onlyfoolsimage from './images/onlyfools.jpg';
import yesministerimage from './images/yesprimeminister.jpg';
import blackadderimage from './images/blackadder.jpg';

export default function Gallery(){
  return (
    <div>
      <div className='container'>
        <Show id='goodlife' name='The Good life' image={goodlifeimage}/>
        <Show id='bottom' name='Bottom' image={bottomimage}/>
        <Show id='fawltytowers' name='Fawlty Towers' image={fawltytowersimage}/>
        <Show id='yesminister' name='Yes, Minister' image={yesministerimage}/>
        <Show id='onlyfools' name='Only Fools and Horses' image={onlyfoolsimage}/>
        <Show id='blackadder' name='Blackadder' image={blackadderimage}/>
      </div>
    </div>
  );
}
