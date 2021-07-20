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
import GameCompleted from '../GameCompleted/GameCompleted';

export default function Game({exitGame, user, displayScore}) {
  const fakeData = [
    { word: "init", hint: "initialise git" }, 
    { word: "status", hint: "see which files have changed on your local version since the last commit" }, 
    { word: "pull", hint: "update what’s on your local version to match what’s on the Github version" }, 
    { word: "diff", hint: "see what has changed within files" },
  ];
  
  const [words, setWords] = useState(fakeData);
  const [guessedLetters, setGuessedLetters] = useState([]); // == correctLetters
  const [lives, setLives] = useState(6);
  const [inProgress, setInProgress] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0)
  const [gameCompleted, setGameCompleted] = useState(false)

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

  const handleQuestionComplete = () => {
    setQuestionIndex(questionIndex + 1)
    resetGame()
  }

  const isLastQuestion = () => {
    return questionIndex === (words.length - 1)
  }

  const handleCompleteGame = () => {
    setGameCompleted(true)
  }

  const handleDisplayScore = () => {
    displayScore()
  }

  return (
    <div className="hang-git-container">
      <Header />
      <DisplayLives
        word={words[questionIndex].word}
        guessedLetters={guessedLetters}
        lives={lives}
        updateLives={setLives}
        />
      <Hint hint={words[questionIndex].hint} />
      <WrongLetters word={words[questionIndex].word} guessedLetters={guessedLetters} />
      <HiddenWord
        word={words[questionIndex].word}
        guessedLetters={guessedLetters}
        inProgress={inProgress}
        />
      {!gameCompleted && <RoundCompleted
        lives={lives}
        resetGame={resetGame}
        updateInProgress={updateInProgress}
        inProgress={inProgress}
        exitGame={exitGame}
        word={words[questionIndex].word}
        guessedLetters={guessedLetters}
        updateQuestionIndex={handleQuestionComplete}
        isLastQuestion={isLastQuestion}
        handleCompleteGame={handleCompleteGame}
        /> }
      {/* Pass score to gamecompleted when finished */}
      {gameCompleted && <GameCompleted handleDisplayScore={handleDisplayScore}/>}
      <Popup />
      <Notification showNotification={showNotification} />
    </div>
  )
}

