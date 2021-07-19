import React, { useState } from 'react'

export default function HomeScreen({startGame}) {

  const [name, setName] = useState("")

  const handleChange = ({target}) => {
    setName(target.value)
  }

  const handleStartGame = (difficulty) => {
    startGame(name, difficulty)
  }
  
  return (
    <div>
    <h1>Play Game</h1>
    <label>
      Enter Name:      
      <input type="text" value={name} onChange={(event) => handleChange(event)}/>
    </label><br/>
    {/* Hard coded, there's a better way of rendering multiple buttons for each difficulty */}
    <button onClick={() => handleStartGame("easy")}>Easy</button>
    <button onClick={() => handleStartGame("hard")}>Hard</button>
  </div>
  )
}
