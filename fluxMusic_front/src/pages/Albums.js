import React, { useEffect, useState } from 'react';
import '../styles/artists.css';
import { api } from '../Api';
import Header from '../components/Header';

export default function Albums() {
  const [albums, setAlbums] = useState();
  console.log('Albums: ', albums);

  useEffect(() => {
    api.get('/albums').then(res => setAlbums(res.data.root.data[0].item));
  }, []);

  return (
    <div className='home-page'>
      <Header />
      <h2>Estou na Albums!</h2>
      { albums ? (
        <div className='body-news'>
          <div className='news'>
        {albums.map((item) => 
          <div className='new'>
            <h5>Olá</h5>
          </div>
        )}
          </div>
        </div>
      ) : null }
    </div>
  );
}
