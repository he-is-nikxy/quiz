import React from 'react';
import './App.css';
import Home from './components/Home.js';
import Leaderboard from './components/Leaderboard.js';
import Quiz from './components/Quiz.js';
import { Route, Link, Routes } from 'react-router-dom';
import QuizQuestions from './components/QuizQuestions.js';

function App() {
  return (
    <>
      <div className="App">
        <div id='navigation'>
          <Link to={"/"} > Home </Link>
          <Link to={"/quiz"} > Quiz </Link>
          <Link to={"/leaderboard"} > Leaderboard </Link>
          {/* <Link to={"/quizQuestions"} ></Link> */}
        </div>
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="/quiz" element ={<Quiz />} />
          <Route path="/leaderboard" element ={<Leaderboard />} />
          <Route path="/quizQuestions" element ={<QuizQuestions />} />
        </Routes>
      </div>
      
    </>
  );
}

export default App;
