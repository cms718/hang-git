import React from 'react'
import './HiddenWord.css';

export default function HiddenWord({word, guessedLetters}) {
  return (
    <div className="hidden-word-container">
      {word.split("").map((letter, index) => {
        if(guessedLetters.includes(letter)) {
          return <p key={`id-${index}`} className="letter">{letter}</p> 
        } else {
          return <p key={`id-${index}`} className="letter">_</p>
        }
      })}
    </div>
  )
}
