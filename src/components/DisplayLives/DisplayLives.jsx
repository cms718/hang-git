import React from 'react'
import { useEffect } from 'react';
import './DisplayLives.css';


export default function DisplayLives({word, guessedLetters, lives, updateLives}) {
  
  useEffect(() => {
    const lastLetter = guessedLetters[guessedLetters.length - 1]
      if(lastLetter && lives > 0 && !word.split("").includes(lastLetter)) {
        updateLives(lives => lives - 1)
      }
  }, [guessedLetters, word, updateLives])

  return (
    <div>
      <svg height="250" width="200" className="figure-container">
        {/* <!-- Rod --> */}
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />

        {/* <!-- Head --> */}
        {lives <= 5  && <circle cx="140" cy="70" r="20" data-testid="head"/>}
        {/* <!-- Body --> */}
        {lives <= 4 && <line x1="140" y1="90" x2="140" y2="150" data-testid="body"/> }
        {/* <!-- Arms --> */}
        {lives <= 3 && <line x1="140" y1="120" x2="120" y2="100" data-testid="arm1"/>}
        {lives <= 2 && <line x1="140" y1="120" x2="160" y2="100" data-testid="arm2"/>}
        {/* <!-- Legs --> */}
        {lives <= 1 && <line x1="140" y1="150" x2="120" y2="180" data-testid="leg1"/>}
        {lives <= 0 && <line x1="140" y1="150" x2="160" y2="180" data-testid="leg2"/>}
      </svg>
      <br></br>
      <span>Lives remaining:</span> <span>{lives}</span>
    </div>
  )
}
