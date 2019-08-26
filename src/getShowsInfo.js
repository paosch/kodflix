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
    { id: 'fawltytowers', name: 'Fawlty Towers', image: fawltytowersimage, description: "Fawlty Towers, a 22-room hotel located in Torquay, the centre of the 'English Riviera', is a den of mishap and disaster. Basil Fawlty, owner and manager of the hotel, is a man of infinite capability in impoliteness, caustic intolerance and general rudeness toward the guests he views as an unwelcome imposition. His wife, Sybil, is of a more practical demeanour, but seems to have an immunity to work. The running of the hotel is thus often left to waitress, maid, and all-round help Polly. Meanwhilse, Spanish waiter and porter Manuel is still struggling with English." },
    { id: 'yesminister', name: 'Yes, Minister', image: yesministerimage },
    { id: 'onlyfools', name: 'Only Fools and Horses', image: onlyfoolsimage },
    { id: 'blackadder', name: 'Blackadder', image: blackadderimage }
  ];
}
