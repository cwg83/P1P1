import { useState, useEffect } from 'react';
import Card from './Card';

function Cube({cube}) {

  const cards = cube.cards;
  console.log(cards)

  return (
    <div className='cube'>
      {
        cards.map((card) => {
          return <Card card={card}/>
        })
      }
    </div>
  );
}

export default Cube;
