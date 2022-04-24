import React from 'react';
import '../styles/noMatch.css';

export default function NoMatch() {

  return (
    <div className='body notfound-container'>
      <p className='notfound-error'>404</p>
      <h2 className='notfound-msg'>Page Not Found</h2>
    </div>
  );
}
