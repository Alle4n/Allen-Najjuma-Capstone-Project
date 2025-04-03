import React, { useState } from 'react';

const QuestionCard = ({ question, onNextQuestion, questionIndex }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const allOptions = [...question.incorrect_answers, question.correct_answer];
  const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);

  const handleOptionClick = (option) => {
    if (!isAnswered) {
      setSelectedAnswer(option);
      setIsAnswered(true);
      // Check if the selected answer is correct
      const isCorrect = option === question.correct_answer;
      onNextQuestion(isCorrect); // Pass the result to the parent
    }
  };

  return (
    <div className="question-card">
      <h2>Question {questionIndex + 1}</h2>
      <p dangerouslySetInnerHTML={{ __html: question.question }} />
      
      <div className="options">
        {shuffledOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={selectedAnswer === option ? 'selected' : ''}
            dangerouslySetInnerHTML={{ __html: option }}
            disabled={isAnswered}
          />
        ))}
      </div>

      <button onClick={() => onNextQuestion(false)} disabled={!isAnswered}>
        Next Question
      </button>
    </div>
  );
};

export default QuestionCard;
