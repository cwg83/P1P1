import { useState, useEffect } from 'react';

function Card({card}) {

  return (
    <div className='card'>
      <h1>{card.name}</h1>
    </div>
  );
}

export default Card;
