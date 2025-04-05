import React, { useState } from 'react';
import LoginForm from './LoginForm'; // import LoginForm component
import SignupForm from './SignupForm'; // import SignupForm component

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
      <header className='inline-flex items-center justify-between p-5 pl-20 pr-20 space-x-96 bg-purple-900 w-full'>
        <h1 className='text-3xl text-gray-300 font-bold italic'>MindFuse Quiz</h1>
        <div className='flex space-x-20 mr-auto'>
          <button onClick={handleSignupClick} className='bg-purple-600 text-white p-2 rounded'>
            Signup
          </button>
          <button onClick={handleLoginClick} className='bg-purple-600 text-white p-2 rounded'>
            Login
          </button>
        </div>
      </header>

      {/* Modal for Login */}
      {showLogin && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="close-btn">X</button>
            <LoginForm />
          </div>
        </div>
      )}

      {/* Modal for Signup */}
      {showSignup && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="close-btn">X</button>
            <SignupForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
