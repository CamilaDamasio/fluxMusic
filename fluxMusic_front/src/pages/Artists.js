import React, { useEffect, useState } from 'react';
import '../styles/artists.css';
import { api } from '../Api';


export default function Artists(props) {
  const [artists, setArtists] = useState();
  console.log('Artists: ', artists);

  useEffect(() => {
    api.get('/artists').then(res => setArtists(res.data.root.data[0].item));
  }, []);

  return (
    <div className='home-page'>
      <h2>Estou na Artists!</h2>
      { artists ? (
        <div className='body-news'>
          <div className='news'>
        {artists.map((item) => 
          <div className='new'>
            <h5>{item.name}</h5>
          </div>
          )}
          </div>
        </div>
      ) : null }
    </div>
  )
}
