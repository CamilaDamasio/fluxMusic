import React, { useEffect, useState } from 'react';
import '../styles/home.css';
import { api } from '../Api';

export default function Home(props) {
  const [news, setNews] = useState();
  console.log('News: ', news);

  useEffect(() => {
    api.get('/').then(res => setNews(res.data.root.data[0].item));
  }, []);

  return (
    <div className='home-page'>
      <h2>Estou na Home!</h2>
      { news ? (
        <div className='body-news'>
          <div className='news'>
        {news.map((item) => 
          <div className='new'>
            <h5>{item.title}</h5>
            <p>{ item.writer }</p>
            <p>{ item.subtitle }</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">More...</a>
          </div>
          )}
          </div>
        </div>
      ) : null }
    </div>
  )
}
