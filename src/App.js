import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import DisplayLives from "./components/DisplayLives/DisplayLives";
import Hint from "./components/Hint/Hint"
import HiddenWord from "./components/HiddenWord/HiddenWord.jsx";
import WrongLetters from "./components/WrongLetters/WrongLetters.jsx";
import Notification from "./components/Notification/Notification.jsx";
import {showNotification as show } from './helpers/helpers';
import './App.css';

function App() {
  const fakeData = [{ word: "init", hint: "initialise git" }];

  const [words, setWords] = useState(fakeData);
  const [guessedLetters, setGuessedLetters] = useState([]); // == correctLetters
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const handleKeyPress = useCallback(
    ({ key }) => {
      if (!guessedLetters.includes(key)) {
        const guessedLettersCopy = [...guessedLetters];
        guessedLettersCopy.push(key);
        setGuessedLetters(guessedLettersCopy);
      } else {
        show(setShowNotification);
      }
    },
    [guessedLetters]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

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
      
       
    </>
  );
}

export default App;
