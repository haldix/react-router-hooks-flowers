import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ flower }) => {
  return (
    <div className='card'>
      <Link to={`/flowers/${flower.id}`}>
        <img src={flower.url} alt={flower.name} />
      </Link>
    </div>
  );
};

export default Card;
