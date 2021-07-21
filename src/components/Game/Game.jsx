import React, { useCallback, useEffect, useState } from "react";
import Header from "../Header/Header";
import DisplayLives from "../DisplayLives/DisplayLives";
import Hint from "../Hint/Hint";
import HiddenWord from "../HiddenWord/HiddenWord.jsx";
import WrongLetters from "../WrongLetters/WrongLetters.jsx";
import "../../App.css";
import Notification from "../Notification/Notification.jsx";
import { showNotification as show } from "../../helpers/helpers";
import RoundCompleted from "../RoundCompleted/RoundCompleted";
import GameCompleted from '../GameCompleted/GameCompleted';
import ScoreTracker from "../ScoreTracker/ScoreTracker";

export default function Game({exitGame, user, displayScore, questions}) {

  const [words, setWords] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [lives, setLives] = useState(6);
  const [inProgress, setInProgress] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [score, setScore] = useState(100)

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

  useEffect(() => {
    setWords(questions)
  }, [questions])

  // If word contains a space
  useEffect(() => {
    if(words.length > 0 && words[questionIndex].word.split("").includes(" ")) {
      const guessedLettersCopy = [...guessedLetters]
      guessedLettersCopy.push(" ")
      setGuessedLetters(guessedLettersCopy)
    } 
  }, [questionIndex, words])

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

  const currentWord = () => {
    return words[questionIndex].word
  }

  const currentHint = () => {
    return words[questionIndex].hint
  }

  if (!words.length > 0) return "";

    
  return (
    <>
    <div className="page-container">
      <Header />
      <div className="hang-git-container">
        <div className="row">
          <div className="column-left">
            <DisplayLives
            word={currentWord()}
            guessedLetters={guessedLetters}
            lives={lives}
            updateLives={setLives}
            />
          <ScoreTracker 
            word={currentWord()}
            guessedLetters={guessedLetters}
            score={score}
            updateScore={setScore}
          />
          </div>
          <div className="column-right">
            <Hint hint={currentHint()} />
            <WrongLetters word={currentWord()} guessedLetters={guessedLetters} />
            <div className='test'>
      <Notification showNotification={showNotification} />
            </div>
            <HiddenWord
              word={currentWord()}
              guessedLetters={guessedLetters}
              inProgress={inProgress}
              />
            {!gameCompleted && <RoundCompleted
              lives={lives}
              resetGame={resetGame}
              updateInProgress={updateInProgress}
              inProgress={inProgress}
              exitGame={exitGame}
              word={currentWord()}
              guessedLetters={guessedLetters}
              updateQuestionIndex={handleQuestionComplete}
              isLastQuestion={isLastQuestion}
              handleCompleteGame={handleCompleteGame}
              /> }
            {/* Pass score to gamecompleted when finished */}
            {gameCompleted && <GameCompleted handleDisplayScore={handleDisplayScore}/>}
          </div>
        </div>
      </div>
    </div> 
    </>
    
  )
}

