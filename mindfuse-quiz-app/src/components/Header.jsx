import React from 'react';

function Header() {
  return (
    <header className='inline-flex items-center justify-between p-5 pl-20 pr-20 space-x-96 bg-purple-900 w-full'>
      <h1 className='text-3xl text-gray-300 font-bold italic'>MindFuse Quiz</h1>
      <div className='flex space-x-20 mr-auto'>
      <button>Signup</button>
      <button>Login</button>
      </div>

    </header>
  );
}

export default Header;
