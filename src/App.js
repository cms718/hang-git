import React, { useState } from "react";
import "./App.css";
import Game from "./components/Game/Game";
import HomeScreen from "./components/HomeScreen/HomeScreen";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };
  return (
    <>
      {!gameStarted && <HomeScreen startGame={handleStartGame} />}
      {gameStarted && <Game />}
    </>
  );
}

export default App;
