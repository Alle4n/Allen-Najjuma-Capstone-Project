import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
          <li>
            <Link to="/score">Score</Link>
          </li>
        </ul>
      </nav>
      <h1>Welcome to MindFuse!</h1>
      <p>Ready to test your knowledge? MindFuse is a fun and interactive quiz app that lets you challenge yourself with a variety of quiz topics, including General Knowledge, Science, Entertainment, and more! 
        Select a topic, start the quiz, and see how many questions you can answer correctly. Track your progress, get instant feedback, and discover your final score at the end.
        Think you have what it takes to score high? Let’s find out!</p>
      <button>START QUIZ</button>
      {/* <p>Select a quiz topic to get started:</p>
      <ul>
        <li><Link to="/quiz?category=9">General Knowledge</Link></li>
        <li><Link to="/quiz?category=17">Science</Link></li>
        <li><Link to="/quiz?category=11">Entertainment</Link></li>
      </ul> */}
    </div>
  );
};

export default HomePage;
