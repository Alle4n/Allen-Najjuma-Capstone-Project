import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const closeModal = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <div>
      <header className='inline-flex flex-col sm:flex-row items-center justify-between p-5 space-y-4 sm:space-y-0 sm:space-x-8 bg-purple-900 w-full'>
        <h1 className='text-3xl sm:text-4xl text-gray-300 font-bold italic text-center sm:text-left'>
          MindFuse Quiz
        </h1>
        <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto'>
          <button
            onClick={handleSignupClick}
            className='bg-purple-300 text-black py-3 px-6 sm:py-2 sm:px-4 rounded w-full sm:w-auto transition transform hover:scale-105'
          >
            Signup
          </button>
          <button
            onClick={handleLoginClick}
            className='bg-purple-300 text-black py-3 px-6 sm:py-2 sm:px-4 rounded w-full sm:w-auto transition transform hover:scale-105'
          >
            Login
          </button>
        </div>
      </header>

      {showLogin && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white p-8 rounded-lg w-11/12 sm:w-1/3 max-w-md" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 text-xl font-semibold text-gray-500 hover:text-gray-700">
              X
            </button>
            <LoginForm />
          </div>
        </div>
      )}

      {showSignup && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white p-8 rounded-lg w-11/12 sm:w-1/3 max-w-md" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 text-xl font-semibold text-gray-500 hover:text-gray-700">
              X
            </button>
            <SignupForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
