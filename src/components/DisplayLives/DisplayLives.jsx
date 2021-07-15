import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function DisplayLives({word, guessedLetters}) {
  const [lives, setLives] = useState(6);
  
  useEffect(() => {
    const lastLetter = guessedLetters[guessedLetters.length - 1]
      if(lastLetter && !word.split("").includes(lastLetter)) {
        setLives(lives => lives - 1)
      }
  }, [guessedLetters, word])

  return (
    <div>
      <p>{lives}</p>
    </div>
  )
}
