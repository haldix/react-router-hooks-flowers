import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  const [flower, setFlower] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/flowers/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFlower(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className='details'>
      <h1>{flower.name}</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <img src={flower.url} alt={flower.name} />
          <button type='button' onClick={() => history.goBack()}>
            Go Back
          </button>
        </>
      )}
    </div>
  );
};

export default Details;
