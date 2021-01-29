import React, { useState, useEffect } from 'react';
import Card from './Card';

const Gallery = () => {
  const [flowers, setFlowers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/flowers')
      .then((res) => res.json())
      .then((data) => {
        setFlowers(data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='gallery'>
      <h1>Gallery of Flowers</h1>
      <div className='container grid'>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          flowers.map((f) => <Card key={f.id} flower={f} />)
        )}
      </div>
    </div>
  );
};

export default Gallery;
