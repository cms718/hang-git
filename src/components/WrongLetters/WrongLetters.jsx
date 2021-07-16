import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function WrongLetters({word, guessedLetters}) {
  const [wrongLetters, setWrongLetters] = useState([]);

  useEffect(() => {
    const lastLetter = guessedLetters[guessedLetters.length - 1]
      if(lastLetter && !word.split("").includes(lastLetter)) {
        const wrongLettersCopy = [...wrongLetters];
        wrongLettersCopy.push(lastLetter + ",");
        setWrongLetters(wrongLettersCopy);
      } else if (!guessedLetters.length) {
        // If no guessed letters then game must have reset, so clear wrongLetters
        const wrongLettersReset = []
        setWrongLetters(wrongLettersReset)
      }
  }, [guessedLetters, word])
  return (
    <div>
      <p>{wrongLetters}</p>
    </div>
  )
}