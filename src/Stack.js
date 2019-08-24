import React from 'react';

export default function Stack(props){
  return (
    <div className='item'>
      <img src={props.image} alt={`${props.name} cover`}/>
      <div className="overlay">
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}
