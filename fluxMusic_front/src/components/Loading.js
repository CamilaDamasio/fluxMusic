import React from 'react';
import ReactLoading from 'react-loading';
import '../styles/loading.css';
 
const type = "bars";

const Loading = () => (
  <div className='loading'>
    <ReactLoading type={type} color="#DE6E6D" height={'10%'} width={'10%'} />
  </div>
);
 
export default Loading;
