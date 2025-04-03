import React, { useState } from 'react';

const QuestionCard = ({ question, onNextQuestion, questionIndex }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Shuffle options for random order
  const allOptions = [...question.incorrect_answers, question.correct_answer];
  const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);

  // Handle option selection
  const handleOptionClick = (option) => {
    if (!isAnswered) {
      setSelectedAnswer(option);
      setIsAnswered(true);
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
            disabled={isAnswered}  // Disable options after answering
          />
        ))}
      </div>

      <button onClick={onNextQuestion} disabled={!isAnswered}>
        Next Question
      </button>
    </div>
  );
};

export default QuestionCard;
