import React from 'react';
import Show from './Show';
import getShowsInfo from './getShowsInfo'

export default function ShowsGallery(){
  return (
    <div>
      <div className='container'>
        {
          getShowsInfo().map(show => (
            <Show
              key={show.id}
              id={show.id}
              name={show.name}
              image={show.image} />
            )
          )
        }
      </div>
    </div>
  );
}
