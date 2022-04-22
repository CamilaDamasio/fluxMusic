import React, { useEffect } from 'react';
import { api } from '../Api';

export default function Home(props) {
  useEffect(() => {
    api.get('/').then(res => console.log(res));
  }, []);

  return (
    <div>
      <h2>Estou na Home!</h2>
    </div>
  )
}
