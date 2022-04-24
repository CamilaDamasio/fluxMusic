import React from 'react';
import './styles/App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Artists from './pages/Artists';
import Albums from './pages/Albums';
import NoMatch from './pages/NoMatch';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/artists' element={<Artists />} />
          <Route path='/albums' element={<Albums />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
