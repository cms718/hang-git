import React, { useState, useEffect } from "react";
import "./App.css";
import Game from "./components/Game/Game";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import { questionData } from "./QuestionData.js";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [user, setUser] = useState({ name: "Anon", score: 0, difficulty: "" });
  const [gameFinished, setGameFinished] = useState(false);
  const [questions, setQuestions] = useState();

  const handleStartGame = (name, difficulty) => {
    const userCopy = { ...user };
    name ? (userCopy.name = name) : (userCopy.name = "Anon");
    userCopy.difficulty = difficulty;
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

  const [players, setPlayers] = useState()

  const URL = process.env.REACT_APP_URL || "localhost:5000/players"

  useEffect(() => {
    const getPlayers = async () => {
      const res = await fetch(URL)
      const data = await res.json()
      setPlayers(data)
    }
    getPlayers()
  }, [URL, gameFinished])

  const getQuestions = (difficulty) => {
    return questionData.filter((question) => question.level === difficulty);
  };
  return (
    <>
      {!gameStarted && !gameFinished && (
        <HomeScreen
          handleStartGame={handleStartGame}
          allQuestions={questionData}
        />
      )}
      {gameStarted && !gameFinished && (
        <Game
          exitGame={handleExitGame}
          user={user}
          displayScore={handleDisplayScore}
          questions={questions}
        />
      )}
      {gameFinished && (
        <ScoreBoard navigateBack={handleExitGame} players={players} />
      )}
    </>
  );
}

export default App;
