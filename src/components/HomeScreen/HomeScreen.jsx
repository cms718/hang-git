import React from 'react'

export default function HomeScreen({startGame}) {
  return (
    <div>
    <h1>Play Game</h1>
    <button onClick={startGame}>Start Game</button>
  </div>
  )
}
