import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import Header from './components/Header';
import ScorePage from './components/ScorePage';
import NavBar from './components/Navigation';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/score" element={<ScorePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
