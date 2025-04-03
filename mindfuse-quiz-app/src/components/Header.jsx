import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>MindFuse Quiz</h1>
      <button>Signup</button>
      <button>Login</button>
      <button>Logout</button>
    </header>
  );
}

export default Header;
