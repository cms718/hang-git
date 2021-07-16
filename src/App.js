import React, { useState } from "react";
import "./App.css";
import Game from "./components/Game/Game";
import HomeScreen from "./components/HomeScreen/HomeScreen";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const toggleStartGame = () => {
    setGameStarted(!gameStarted);
  };
  return (
    <>
      {!gameStarted && <HomeScreen startGame={toggleStartGame} />}
      {gameStarted && <Game exitGame={toggleStartGame} />}
    </>
  );
}

export default App;
