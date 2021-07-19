import React, { useCallback, useEffect, useState } from "react";
import Header from "../Header/Header";
import DisplayLives from "../DisplayLives/DisplayLives";
import Hint from "../Hint/Hint";
import HiddenWord from "../HiddenWord/HiddenWord.jsx";
import WrongLetters from "../WrongLetters/WrongLetters.jsx";
import "../../App.css";
import Notification from "../Notification/Notification.jsx";
import Popup from "../Popup/Popup.jsx";
import { showNotification as show } from "../../helpers/helpers";
import RoundCompleted from "../RoundCompleted/RoundCompleted";

export default function Game({exitGame, user}) {
  const fakeData = [
    { word: "init", hint: "initialise git" }, 
    { word: "pull", hint: "update what’s on your local version to match what’s on the Github version" }, 
    { word: "status", hint: "see which files have changed on your local version since the last commit" }, 
    { word: "diff", hint: "see what has changed within files" },
  ];
  
  const [words, setWords] = useState(fakeData);
  const [guessedLetters, setGuessedLetters] = useState([]); // == correctLetters
  const [lives, setLives] = useState(6);
  const [inProgress, setInProgress] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  
  const handleKeyPress = useCallback(
    ({ key }) => {
      if (inProgress) {
        if (!guessedLetters.includes(key)) {
          const guessedLettersCopy = [...guessedLetters];
          guessedLettersCopy.push(key);
          setGuessedLetters(guessedLettersCopy);
        } else {
          show(setShowNotification);
        }
      }
    },
    [guessedLetters, inProgress]
  );
  
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
  
  const resetGame = () => {
    setLives(6);
    setGuessedLetters([]);
    setInProgress(true);
  };
  
  const updateInProgress = (bool) => {
    setInProgress(bool);
  };
  return (
    <div className="hang-git-container">
      <Header />
      <DisplayLives
        word={words[0].word}
        guessedLetters={guessedLetters}
        lives={lives}
        updateLives={setLives}
      />
      <Hint hint={words[0].hint} />
      <WrongLetters word={words[0].word} guessedLetters={guessedLetters} />
      <HiddenWord
        word={words[0].word}
        guessedLetters={guessedLetters}
        inProgress={inProgress}
      />
      <RoundCompleted
        lives={lives}
        resetGame={resetGame}
        updateInProgress={updateInProgress}
        inProgress={inProgress}
        exitGame={exitGame}
        word={words[0].word}
        guessedLetters={guessedLetters}
      />
      <Popup />
      <Notification showNotification={showNotification} />
    </div>
  )
}

