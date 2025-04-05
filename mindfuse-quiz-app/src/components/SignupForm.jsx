import React, { useState } from 'react';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    console.log('Signup submitted with:', { email, password });
  };

  const handleAlert = () => {
    alert('Coming Soon');
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            placeholder="Confirm your password"
            required
          />
        </div>
        <button 
          type="submit" 
          className="w-full p-2 bg-purple-950 text-white rounded"
          onClick={handleAlert}
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
