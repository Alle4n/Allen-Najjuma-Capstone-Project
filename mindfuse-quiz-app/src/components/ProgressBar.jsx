import React from 'react';

const ProgressBar = ({ currentQuestionIndex, totalQuestions }) => {
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="w-full mb-4">
      <div className="text-center text-sm text-gray-700 mt-2 mb-2">
        {`Question ${currentQuestionIndex + 1} / ${totalQuestions}`}
      </div> 

      <div className="w-full bg-gray-300 rounded-full h-2.5">
        <div
          className="bg-purple-950 h-2.5 rounded-full"
          style={{ width: `${progressPercentage}%` }} 
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
