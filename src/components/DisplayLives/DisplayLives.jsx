import React from 'react'
import { useEffect } from 'react';

export default function DisplayLives({word, guessedLetters, lives, updateLives}) {
  
  useEffect(() => {
    const lastLetter = guessedLetters[guessedLetters.length - 1]
      if(lastLetter && lives > 0 && !word.split("").includes(lastLetter)) {
        updateLives(lives => lives - 1)
      }
  }, [guessedLetters, word, updateLives])

  return (
    <div>
      <p>{lives}</p>
    </div>
  )
}
