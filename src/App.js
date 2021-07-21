import React, { useState } from "react";
import "./App.css";
import Game from "./components/Game/Game";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import {questionData} from "./QuestionData.js"
import { userScores } from "./UserScores";

function App() {

  const [gameStarted, setGameStarted] = useState(false);
  const [user, setUser] = useState({ name: "Anon", score: 0 });
  const [gameFinished, setGameFinished] = useState(false);
  const [questions, setQuestions] = useState();

  const handleStartGame = (name, difficulty) => {
    const userCopy = { ...user };
    userCopy.name = name;

    setUser(userCopy);
    setQuestions(getQuestions(difficulty));
    setGameStarted(true);
  };

  const handleExitGame = () => {
    setGameStarted(false);
    setGameFinished(false);
    setUser({ name: "Anon", score: 0 });
  };

  const handleDisplayScore = () => {
    setGameFinished(true);
  };

  const getQuestions = (difficulty) => {
    return questionData.filter((question) => question.level === difficulty);
  };

  return (
    <>
      {!gameStarted && !gameFinished && (
        <HomeScreen handleStartGame={handleStartGame} allQuestions={questionData} />
      )}
      {gameStarted && !gameFinished && (
        <Game
          exitGame={handleExitGame}
          user={user}
          displayScore={handleDisplayScore}
          questions={questions}
        />
      )}
      {gameFinished && <ScoreBoard navigateBack={handleExitGame} userScores={userScores} />}
    </>
  );
}

export default App;
