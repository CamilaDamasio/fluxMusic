import React, { useEffect, useState } from 'react';
import '../styles/artists.css';
import { api } from '../Api';
import Header from '../components/Header';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image from '../images/background_image.png';

export default function Albums() {
  const [albums, setAlbums] = useState();
  console.log('Albums: ', albums);

  useEffect(() => {
    api.get('/albums').then(res => setAlbums(res.data.root.data[0].item));
  }, []);

  return (
    <div className='body'>
      <img src={image} alt="background sound" className='background-img' />
      <Header />
      { albums ? (
        <Slide className='carousel'>
        {albums.map((item) => (
          <div className="each-slide" key={1}>
            <div className='slide'>
              <span className='title'>{item.title}</span>
            </div>
          </div>
        ))}
        </Slide>
      ) : null }
    </div>
  );
}
