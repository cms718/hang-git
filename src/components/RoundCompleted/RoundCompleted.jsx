import React, { useEffect, useState } from 'react'

export default function RoundCompleted({lives, resetGame, inProgress, updateInProgress, exitGame, word, guessedLetters}) {
  const [lose, setLose] = useState(false)
  const [win, setWin] = useState(false)

  useEffect(() => {
    if (lives === 0) {
      setLose(true)
      updateInProgress(false)
    }
  }, [lives, updateInProgress])

  useEffect(() => {
    if (word.split("").every(letter => {
      return guessedLetters.includes(letter)
    })) {
      setWin(true)
      updateInProgress(false)
    }
  }, [guessedLetters, word, updateInProgress])

  const reset = () => {
    setLose(false)
    resetGame()
  }

  return (
    <div>
      {lose && !inProgress &&
      <div>
        <button onClick={reset}>Try again</button>
        <button onClick={exitGame}>Exit</button>
      </div>}
      {win &&
        <div>
          <p>Well Done!</p>
          <button>Next Question</button>
        </div>
        }
    </div>
  )
}
