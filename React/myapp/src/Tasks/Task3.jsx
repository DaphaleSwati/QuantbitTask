import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './Task3.css';

function Home() {
  return <h1 className="page-title">Welcome to the Home Page!</h1>;
}

function About() {
  return <h1 className="page-title">Learn More About Us!</h1>;
}

function Task3() {
  return (
    <Router>
      <nav className="navbar">
        <div className="logo">MySite</div>
        <div className="nav-links">
          <Link className="nav-item" to="/">Home</Link>
          <Link className="nav-item" to="/about">About</Link>
        </div>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Task3;
