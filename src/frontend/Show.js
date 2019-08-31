import React from 'react';
import { Link } from 'react-router-dom';

export default function Show(props){
  return (
    <Link to={`/${props.id}`} className='item'>
      <img src={props.image} alt={`${props.name} cover`}/>
      <div className="overlay">
        <h1>{props.name}</h1>
      </div>
    </Link>
  );
}
