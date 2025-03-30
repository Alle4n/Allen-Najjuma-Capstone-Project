import { useState, useEffect } from 'react';
import axios from 'axios';
// import QuestionCard from './QuestionCard';
// import ProgressBar from './ProgressBar';
// import Loader from './Loader';
// import Feedback from './Feedback';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState(null);

  // Fetch quiz questions from the API
  useEffect(() => {
    const fetchQuestions = async () => {
      const category = new URLSearchParams(window.location.search).get('category');
      const response = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`);
      setQuestions(response.data.results);
      setIsLoading(false);
    };

    fetchQuestions();
  }, []);

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.correct_answer;

    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect');
    }

    // Move to the next question
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (currentQuestionIndex >= questions.length) {
    return <ScorePage score={score} total={questions.length} />;
  }

  return (
    <div>
      <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
      <QuestionCard
        question={questions[currentQuestionIndex].question}
        answers={[...questions[currentQuestionIndex].incorrect_answers, questions[currentQuestionIndex].correct_answer]}
        onAnswer={handleAnswer}
      />
      {feedback && <Feedback message={feedback} />}
    </div>
  );
};

export default QuizPage;
