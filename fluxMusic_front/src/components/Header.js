import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <button type="button" className="nav-btn" onClick={ () => navigate('/') }>
        <div className="nav-item">
          <h5 className="nav-link" aria-current="page">Home / News</h5>
        </div>
      </button>
      <button type="button" className="nav-btn" onClick={ () => navigate('/artists') }>
        <div className="nav-item">
          <h5 className="nav-link">Artists</h5>
        </div>
      </button>
      <button type="button" className="nav-btn" onClick={ () => navigate('/albums') }>
        <div className="nav-item">
          <h5 className="nav-link">Albums</h5>
        </div>
      </button>
    </div>
  );
}

export default Header;
