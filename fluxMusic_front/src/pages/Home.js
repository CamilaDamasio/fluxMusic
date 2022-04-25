import React, { useEffect, useState } from 'react';
import '../styles/home.css';
import { api } from '../Api';
import Header from '../components/Header';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image from '../images/background_image.png';
import Loading from '../components/Loading';

export default function Home() {
  const [news, setNews] = useState();

  useEffect(() => {
    api.get('/').then(res => setNews(res.data.root.data[0].item));
  }, []);

  return (
    <div className='body'>
      <img src={image} alt="background sound" className='background-img' />
        <Header />
        { news ? (
          <Slide className='carousel'>
            {news.map((item) => (
              <div className="each-slide" key={1}>
                <div className='slide'>
                  <span className='title'>{item.title}</span>
                  <div className='subtitle'>
                    <p>{item.subtitle}</p>
                  </div>
                  <div className='link-more'>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className='link'>More...</a>
                  </div>
                </div>
              </div>
            ))}
          </Slide>
        ) : <Loading /> }
    </div>
  );
}
