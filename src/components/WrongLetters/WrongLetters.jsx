import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const getColor = (wrongLetters) => {
  return 'rgba(185, 28, 28, 0.884)';
};



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
    <span style={{ color: getColor(wrongLetters) }}>{wrongLetters}</span>
    </div>
  )
}