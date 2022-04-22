import React, { useEffect } from 'react';
import { api } from '../Api';


export default function Home(props) {
  useEffect(() => {
    api.get('/albums').then(res => console.log(res));
  }, []);

  return (
    <div>
      <h2>Estou na Albums!</h2>
    </div>
  )
}