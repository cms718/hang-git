import React, { useState } from "react";
import "./App.css";
import Game from "./components/Game/Game";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [user, setUser] = useState({ name: "Anon", score: 0 });
  const [gameFinished, setGameFinished] = useState(false);

  const handleStartGame = (name) => {
    setGameStarted(true);
    const userCopy = { ...user };
    userCopy.name = name;
    setUser(userCopy);
  };

  const handleExitGame = () => {
    setGameStarted(false);
  };

  const handleDisplayScore = () => {
    setGameFinished(true);
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
        />
      )}
      {gameFinished && <ScoreBoard />}
    </>
  );
}

export default App;
