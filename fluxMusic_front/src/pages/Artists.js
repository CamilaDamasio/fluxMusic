import React, { useEffect, useState } from 'react';
import '../styles/artists.css';
import { api } from '../Api';
import Header from '../components/Header';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image from '../images/background_image.png';

export default function Artists() {
  const [artists, setArtists] = useState();
  console.log('Artists: ', artists);

  useEffect(() => {
    api.get('/artists').then(res => setArtists(res.data.root.data[0].item));
  }, []);

  return (
    <div className='body'>
      <img src={image} alt="background sound" className='background-img' />
      <Header />
      <h2>Estou na Artists!</h2>
      { artists ? (
        <Slide className='carousel'>
        {artists.map((item) => (
          <div className="each-slide" key={1}>
            <div className='slide'>
              <span className='title'>{item.name}</span>
            </div>
          </div>
        ))}
        </Slide>
      ) : null }
    </div>
  );
}
