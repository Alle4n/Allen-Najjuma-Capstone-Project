import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>MindFuse Quiz</h1>
      <button>Signup</button>
      <button>Login</button>

      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quiz">Start Quiz</Link>
          </li>
          <li>
            <Link to="/score">Score</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}

export default Header;
