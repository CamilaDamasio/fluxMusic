import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/header.css';
import logo from '../images/logo.png';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className='logo-container'>
        <img src={logo} alt="background sound" className='logo' />
      </div>
      <div className='nav-btns-container'>
        <button type="button" className="nav-btn" onClick={ () => navigate('/') }>
          <div className="nav-item">
            <h5 className="nav-link" aria-current="page">News</h5>
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
    </div>
  );
}

export default Header;
