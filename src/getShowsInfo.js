// import React from 'react'; not necessary here because this is just a React function
import goodlifeimage from './images/goodlife.jpg';
import bottomimage from './images/bottom.jpg';
import fawltytowersimage from './images/fawltytowers.jpg';
import onlyfoolsimage from './images/onlyfools.jpg';
import yesministerimage from './images/yesprimeminister.jpg';
import blackadderimage from './images/blackadder.jpg';

export default function getShowsInfo(){
  return [
    { id: 'goodlife', name: 'The Good life', image: goodlifeimage },
    { id: 'bottom', name: 'Bottom', image: bottomimage },
    { id: 'fawltytowers', name: 'Fawlty Towers', image: fawltytowersimage },
    { id: 'yesminister', name: 'Yes, Minister', image: yesministerimage },
    { id: 'onlyfools', name: 'Only Fools and Horses', image: onlyfoolsimage },
    { id: 'blackadder', name: 'Blackadder', image: blackadderimage }
  ];
}
