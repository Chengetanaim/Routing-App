import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Link to="">
        <a
          className="App-link"
        >
          Home Page
        </a>
        </Link>

        <Link to="/products">
          View Products
        </Link>
      </header>
    </div>
  );
}

export default App;
