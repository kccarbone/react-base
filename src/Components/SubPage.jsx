import React from 'react';
import { Link } from 'react-router-dom';

const SubPage = () => (
  <div className="subpage-content">
    <h2>Sub Page!</h2>
    <p><Link to="/">Back</Link></p>
  </div>
);

export default SubPage;