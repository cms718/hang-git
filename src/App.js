import React, { useState } from "react";
import "./App.css";
import Game from "./components/Game/Game";
import HomeScreen from "./components/HomeScreen/HomeScreen";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [user, setUser] = useState({ name: "Anon", score: 0 });

  const handleStartGame = (name) => {
    console.log(name);
    setGameStarted(true);
    const userCopy = { ...user };
    userCopy.name = name;
    console.log(userCopy);
    setUser(userCopy);
  };

  const handleExitGame = () => {
    setGameStarted(false);
  };

  return (
    <>
      {!gameStarted && <HomeScreen startGame={handleStartGame} />}
      {gameStarted && <Game exitGame={handleExitGame} user={user} />}
    </>
  );
}

export default App;
