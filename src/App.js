import React, { useState } from "react";
import "./App.css";
import Game from "./components/Game/Game";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

function App() {
  // Replace fakaData with a fetch to API in a useEffect with async function
  const fakeData = [
    { word: "init", level: "easy", hint: "initialise git" },
    {
      word: "status",
      level: "easy",
      hint: "see which files have changed on your local version since the last commit",
    },
    {
      word: "pull",
      level: "easy",
      hint: "update what’s on your local version to match what’s on the Github version",
    },
    {
      word: "diff",
      level: "easy",
      hint: "see what has changed within files",
    },
    {
      word: "branch -b z",
      level: "hard",
      hint: "create and begin working on a new branch 'z'",
    },
  ];

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
    return fakeData.filter((question) => question.level === difficulty);
  };

  return (
    <>
      {!gameStarted && !gameFinished && (
        <HomeScreen startGame={handleStartGame} />
      )}
      {gameStarted && !gameFinished && (
        <Game
          exitGame={handleExitGame}
          user={user}
          displayScore={handleDisplayScore}
          questions={questions}
        />
      )}
      {gameFinished && <ScoreBoard navigateBack={handleExitGame} />}
    </>
  );
}

export default App;
