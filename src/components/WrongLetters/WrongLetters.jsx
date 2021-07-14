import React from 'react'
import './WrongLetters.css';
  
  export default function WrongLetters({wrongLetters}) {
    return (
      <div classname ="wrong-letters-container">
        <div>
          {wrongLetters.length > 0 && 
            <p>Wrong</p>
          }
          {wrongLetters
            .map((letter,i) => <span key={i}>{letter}</span>)
            .reduce((prev,curr) => prev === null ? [curr] : [prev,', ', curr], null)}
        </div>
      </div>
    )
  }  

