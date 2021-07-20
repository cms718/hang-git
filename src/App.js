
import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import DisplayLives from "./components/DisplayLives/DisplayLives";
import Hint from "./components/Hint/Hint"
import HiddenWord from "./components/HiddenWord/HiddenWord.jsx";
import WrongLetters from "./components/WrongLetters/WrongLetters.jsx";
import Notification from "./components/Notification/Notification.jsx";
import {showNotification as show } from './helpers/helpers';
import './App.css';
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
    setGameFinished(false);
    setUser({ name: "Anon", score: 0 });
  };

  const handleDisplayScore = () => {
    setGameFinished(true);
  };

  return (
    <>
      <div className ="game-container">
      <Header />
      <DisplayLives word={words[0].word} guessedLetters={guessedLetters} />
      <Hint hint={words[0].hint}/>
      <WrongLetters wrongLetters={wrongLetters} />
      <HiddenWord word={words[0].word} guessedLetters={guessedLetters} />
      {/* <Popup /> */}
    </div>
    <Notification showNotification={showNotification} />
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
      {gameFinished && <ScoreBoard navigateBack={handleExitGame} />}
    </>
  );
}

export default App;
