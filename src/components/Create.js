import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !url) return;
    const flower = { name, url };

    fetch('/flowers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(flower),
    })
      .then(() => {
        history.push('/gallery');
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className='create'>
      <div className='container'>
        <h1>Add a New Picture to the Gallery</h1>
        <form className='form' onSubmit={handleSubmit}>
          <div className='input-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              autoComplete='off'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='input-group'>
            <label htmlFor='url'>Image Url</label>
            <input
              type='text'
              autoComplete='off'
              name='url'
              id='url'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
