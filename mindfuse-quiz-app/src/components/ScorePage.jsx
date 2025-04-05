import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ScorePage = ({
  correctAnswers,
  incorrectAnswers,
  total,
  overallCorrectAnswers,
  totalQuizzes,
  onRestart, // Ensure the onRestart function is passed correctly
}) => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to navigate to the home page
  const goToHomePage = () => {
    navigate('/'); // Navigate to the home page (you can change '/' to your desired route)
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">Quiz Completed!</h1>
        <div className="text-center mb-6">
          <p className="text-lg font-medium">Your score: <span className="font-bold text-purple-600">{correctAnswers}/{total}</span></p>
          <p className="text-md text-gray-700">Correct Answers: <span className="font-bold text-green-500">{correctAnswers}</span></p>
          <p className="text-md text-gray-700">Incorrect Answers: <span className="font-bold text-red-500">{incorrectAnswers}</span></p>
        </div>
        
        <div className="border-t border-gray-300 pt-6 mt-6">
          <h2 className="text-2xl font-semibold text-center mb-4">Overall Total</h2>
          <p className="text-lg text-gray-700">Total Correct Answers Across All Quizzes: <span className="font-bold text-green-600">{overallCorrectAnswers}</span></p>
          <p className="text-lg text-gray-700">Total Quizzes Completed: <span className="font-bold text-purple-600">{totalQuizzes}</span></p>
        </div>

        <div className="mt-8 text-center space-x-32">
          <button
            onClick={goToHomePage} // Navigate to home page
            className="bg-purple-950 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-300 transition duration-300"
          >
            Go to Home
          </button>
          
          <button
            onClick={onRestart} // Restart the quiz
            className="bg-purple-950 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-300 transition duration-300"
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScorePage;
