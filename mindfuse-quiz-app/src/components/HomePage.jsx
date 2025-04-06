import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  const navigate = useNavigate();

  const goToQuizPage = () => {
    navigate('/quiz');
  }
  return (
    <div className='h-96 flex flex-col items-center justify-center text-center p-6'>
      <h1 className='mb-10 mt-0 text-4xl sm:text-6xl sm:mb-16 sm:mt-4'>Welcome to MindFuse!</h1>
      <p className='mb-10 sm:mb-16 text-xs sm:text-base'>Ready to test your knowledge? MindFuse is a fun and interactive quiz app that lets you challenge yourself with a variety of quiz topics, including General Knowledge, Science, Entertainment, and more! 
        Select a topic, start the quiz, and see how many questions you can answer correctly. Track your progress, get instant feedback, and discover your final score at the end.
        Think you have what it takes to score high? Let’s find out!</p>
      <button 
      onClick={goToQuizPage}
      className='bg-purple-950 text-white font-bold'>START QUIZ</button>
    </div>
  );
};

export default HomePage;
