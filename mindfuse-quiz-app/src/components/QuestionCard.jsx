import React, { useState, useEffect } from 'react';

const QuestionCard = ({ question, onNextQuestion, questionIndex }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    const allOptions = [...question.incorrect_answers, question.correct_answer];
    setShuffledOptions(allOptions.sort(() => Math.random() - 0.5));
    setSelectedAnswer(null);
    setIsAnswered(false);
  }, [question]);

  const handleOptionChange = (event) => {
    const option = event.target.value;
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    const isCorrect = selectedAnswer === question.correct_answer;
    setIsAnswered(true);
    onNextQuestion(isCorrect);
  };

  return (
    <div className="question-card p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Question {questionIndex + 1}</h2>
      <p className="text-lg" dangerouslySetInnerHTML={{ __html: question.question }} />

      <div className="options mt-4">
        {shuffledOptions.map((option, index) => (
          <label
            key={index}
            className={`block cursor-pointer mt-2 flex items-center space-x-3 p-2 rounded-lg
              ${selectedAnswer === option ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
          >
            <input
              type="radio"
              name={`question-${questionIndex}`}
              value={option}
              onChange={handleOptionChange}
              checked={selectedAnswer === option}
              disabled={isAnswered && selectedAnswer !== option}
              className={`w-6 h-6 border-2 rounded-full 
                ${selectedAnswer === option ? 'border-blue-600 bg-blue-600' : 'border-gray-400'}`}
            />
            <span dangerouslySetInnerHTML={{ __html: option }} />
          </label>
        ))}
      </div>

      <button
        onClick={handleNextQuestion}
        disabled={!selectedAnswer}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-400"
      >
        Next Question
      </button>
    </div>
  );
};

export default QuestionCard;
