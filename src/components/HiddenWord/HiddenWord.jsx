import React from 'react'
import './HiddenWord.css';

export default function HiddenWord({word, guessedLetters}) {
  return (
    <div className="hidden-word-container">
      {word.split("").map((letter, index) => {
        return guessedLetters.includes(letter) ? 
        <p key={`id-${index}`} className="letter">{letter}</p> : 
        <p key={`id-${index}`} className="letter">_</p>
      })}
    </div>
  )
}
