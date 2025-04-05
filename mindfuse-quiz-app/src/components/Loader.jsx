import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <p className="text-xl font-semibold text-gray-800 mb-4">Loading questions...</p>
        <div className="flex justify-center items-center">
          <div className="w-8 h-8 border-t-4 border-purple-950 border-solid rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
