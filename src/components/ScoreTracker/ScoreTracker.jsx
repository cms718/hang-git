import React from 'react';
import { useEffect } from 'react';
import './ScoreTracker.css';

export default function ScoreTracker ({word, guessedLetters, score, updateScore}) {
    
    useEffect(() => {
        const lastLetter = guessedLetters[guessedLetters.length - 1]
      if(lastLetter && score > 0 && !word.split("").includes(lastLetter)) {
        updateScore(score => score - 1)
    }
  }, [guessedLetters, word, updateScore])


    return (
        <div>
            <p>Your Score: {score}</p>
        </div>
    )
}
