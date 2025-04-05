import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import QuestionCard from './QuestionCard';
import ScorePage from './ScorePage';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [overallCorrectAnswers, setOverallCorrectAnswers] = useState(0);
  const [totalQuizzes, setTotalQuizzes] = useState(0);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://opentdb.com/api_category.php');
        const data = await response.json();
        setCategories(data.trivia_categories);
      } catch (err) {
        setError('Failed to fetch categories');
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const fetchQuestions = async () => {
        setLoading(true);
        try {
          const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${selectedCategory}`);
          const data = await response.json();
          setQuestions(data.results);
          setLoading(false);
        } catch (err) {
          setError('Failed to fetch questions');
          setLoading(false);
        }
      };

      fetchQuestions();
    }
  }, [selectedCategory]);

  const handleNextQuestion = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers((prevCorrect) => prevCorrect + 1);
    } else {
      setIncorrectAnswers((prevIncorrect) => prevIncorrect + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setQuizFinished(false);
    setQuestions([]);
    setOverallCorrectAnswers(0);
    setTotalQuizzes(0);
  };

  const handleRestart = () => {
    setOverallCorrectAnswers((prevOverallCorrect) => prevOverallCorrect + correctAnswers);
    setTotalQuizzes((prevTotalQuizzes) => prevTotalQuizzes + 1);

    setSelectedCategory('');
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setQuestions([]);
    setQuizFinished(false);
  };

  return (
    <div className="flex flex-col items-center justify-between bg-gray-100 p-6">
      {!questions.length && !loading && !error && (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Select a Category:</h2>
          <select
            onChange={handleCategoryChange}
            value={selectedCategory}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="" disabled>Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {loading && <Loader />}

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {questions.length > 0 && !loading && !error && !quizFinished && currentQuestionIndex < questions.length && (
        <div className="w-full max-w-md">
          <QuestionCard
            question={questions[currentQuestionIndex]}
            onNextQuestion={handleNextQuestion}
            questionIndex={currentQuestionIndex}
          />
        </div>
      )}

      {quizFinished && !loading && !error && (
        <div className="w-full max-w-md">
          <ScorePage
            correctAnswers={correctAnswers}
            incorrectAnswers={incorrectAnswers}
            total={questions.length}
            overallCorrectAnswers={overallCorrectAnswers}
            totalQuizzes={totalQuizzes}
            onRestart={handleRestart}
          />
        </div>
      )}
    </div>
  );
};

export default App;
