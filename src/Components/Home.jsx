import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="subpage-content">
    <h2>Home</h2>
    <p><Link to="/SubPage">SubPage</Link></p>
  </div>
);

export default Home;