import React, { useState, useEffect } from 'react';
import Loader from './Loader'; // Import the Loader component

const App = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  return (
    <div>
      <h1>Trivia App</h1>
      
      <div>
        <h2>Select a Category:</h2>
        <select onChange={(e) => setSelectedCategory(e.target.value)} defaultValue="">
          <option value="" disabled>Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Show loader if data is still loading */}
      {loading && <Loader />}
      {error && <p>{error}</p>}

      {questions.length > 0 && (
        <ul>
          {questions.map((question, index) => (
            <li key={index}>{question.question}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
