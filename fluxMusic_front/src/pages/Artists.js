import React, { useEffect } from 'react';
import { api } from '../Api';


export default function Home(props) {
  useEffect(() => {
    api.get('/artists').then(res => console.log(res));
  }, []);

  return (
    <div>
      <h2>Estou na Artists!</h2>
    </div>
  )
}