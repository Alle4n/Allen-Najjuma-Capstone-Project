MindFuse Quiz App

MindFuse is an interactive quiz app that allows users to take quizzes on various topics, answer multiple-choice questions, and view their final scores. It fetches trivia questions from the Open Trivia Database API and provides instant feedback after each answer. At the end of the quiz, users will see their score along with correct and incorrect answers.

Table of Contents

Project Overview

Features

API Integration

React Components

Installation

Usage

Contributing

License

Project Overview

The MindFuse app offers a fun and educational way for users to test their knowledge across different quiz topics such as General Knowledge, Science, and Entertainment. It uses a modern React framework and fetches quiz data from an external API to ensure fresh and relevant questions. The app features an interactive interface with instant feedback and score tracking.

Features

Topic Selection: Users can choose a quiz topic (e.g., General Knowledge, Science, Entertainment) before starting.

Question Display: Displays one question at a time with multiple-choice answers.

Answer Feedback: Users receive immediate feedback (correct/incorrect) after answering each question.

Final Score: After completing all questions, users will see their total score.

Responsive Design: The app is fully responsive, providing a smooth experience on both mobile and desktop devices.

API Integration: The app fetches trivia questions from the Open Trivia Database API.

User Interaction: Buttons for selecting answers and navigating through questions.

API Integration

The app utilizes the Open Trivia Database API to fetch quiz questions. The API is free and provides a large variety of trivia questions across various topics.

API Documentation: Open Trivia Database

React Components

The following React components make up the app:

App: The root component, responsible for routing between different pages (Home, Quiz, Score).

HomePage: Displays a list of quiz topics and a button to start the quiz.

QuizPage: The main page for the quiz, where users interact with questions and answers.

QuestionCard: Displays the current question and its multiple-choice options.

AnswerButton: Represents each answer choice as a button that the user can select.

ProgressBar: Displays the user’s progress throughout the quiz.

ScorePage: Shows the user's final score, including correct and incorrect answers.

Loader: Displays a loading indicator while fetching data from the API.

Feedback: Provides a message indicating whether the user's answer was correct or incorrect.

Installation

To run this project locally, follow these steps:

Clone the repository:

git clone https://github.com/Alle4n/Allen-Najjuma-Capstone-Project.git

Navigate into the project directory:

cd mindfuse-quiz-app

Install the required dependencies:

npm install

Start the development server:

npm start

Open your browser and go to http://localhost:3000 to view the app.

Usage

Upon loading the app, you will be presented with the HomePage where you can select a quiz topic.

After selecting a topic, the QuizPage will appear with a series of multiple-choice questions. Choose an answer and move on to the next question.

Once the quiz is completed, you will be taken to the ScorePage, showing your final score and the breakdown of correct and incorrect answers.

Contributing

All contributions are welcome to MindFuse! If you'd like to contribute to the project, please follow these steps:

Fork the repository.

Create a new branch for your feature or fix:

git checkout -b feature/your-feature

Make your changes and commit them:

git commit -m "Add a description of your changes"

Push your changes to your fork:

git push origin feature/your-feature

Open a pull request on the main repository.

License

This project is licensed under the MIT License - see the LICENSE file for details.