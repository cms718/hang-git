import React, { useEffect, useState } from 'react'
import './RoundCompleted.css'

import ConfettiExplosion from '@reonomy/react-confetti-explosion';

export default function RoundCompleted({
  lives, resetGame, inProgress, 
  updateInProgress, exitGame, 
  word, guessedLetters, updateQuestionIndex, 
  isLastQuestion, handleCompleteGame}) {

  const [lose, setLose] = useState(false)
  const [win, setWin] = useState(false)


  const [isExploding, setIsExploding] = React.useState(true);


  useEffect(() => {
    if (lives === 0) {
      setLose(true)
      updateInProgress(false)
    }
  }, [lives, updateInProgress])



  useEffect(() => {
    // if user guessed the word
    if (word.split("").every(letter => {
      return guessedLetters.includes(letter)
    })) {
      setWin(true)
      updateInProgress(false)
      if(isLastQuestion()) {
        handleCompleteGame()
      }
    }
  }, [guessedLetters, word, updateInProgress, isLastQuestion, handleCompleteGame])

  const reset = () => {
    setLose(false)
    resetGame()
  }

  const nextQuestion = () => {
    updateQuestionIndex()
    setWin(false)
  }

  return (
    <div>
      {lose && !inProgress &&
      <div>
        <button className="btn-category" id="reset" onClick={reset}>Try again</button>
        <button className="btn-category" id="exit" onClick={exitGame}>Exit</button>
      </div>}
      {win &&
        <div>
          <p>Well Done!</p>

          {isExploding && <ConfettiExplosion />}
          <button className="btn-category" onClick={nextQuestion}>Next Question</button>
        </div>
        }
    </div>
  )
}
