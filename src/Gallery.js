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
        <Show name='The Good life' image={goodlifeimage}/>
        <Show name='Bottom' image={bottomimage}/>
        <Show name='Fawlty Towers' image={fawltytowersimage}/>
      </div>
      <div className='container'>
        <Show name='Yes, Minister' image={yesministerimage}/>
        <Show name='Only Fools and Horses' image={onlyfoolsimage}/>
        <Show name='Blackadder' image={blackadderimage}/>
      </div>
    </div>
  );
}
