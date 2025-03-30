import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>MindFuse Quiz</h1>
      <p>Select a quiz topic to get started:</p>
      <ul>
        <li><Link to="/quiz?category=9">General Knowledge</Link></li>
        <li><Link to="/quiz?category=17">Science</Link></li>
        <li><Link to="/quiz?category=11">Entertainment</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;
