import React from 'react';
import './styles/App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Home from './pages/Home';
import Artists from './pages/Artists';
import Albums from './pages/Albums';
// import axios from 'axios';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/artists' element={<Artists />} />
          <Route path='/albums' element={<Albums />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
