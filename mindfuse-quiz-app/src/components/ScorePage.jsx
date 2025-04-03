// ScorePage.js
import React from 'react';

const ScorePage = ({ correctAnswers, incorrectAnswers, total, onRestart, overallCorrectAnswers, totalQuizzes }) => {
  return (
    <div className="score-page">
      <h1>Quiz Completed!</h1>
      <p>Your score: {correctAnswers}/{total}</p>
      <p>Correct Answers: {correctAnswers}</p>
      <p>Incorrect Answers: {incorrectAnswers}</p>

 
      <h2>Overall Total</h2>
      <p>Total Correct Answers Across All Quizzes: {overallCorrectAnswers}</p>
      <p>Total Quizzes Completed: {totalQuizzes}</p>

      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

export default ScorePage;
