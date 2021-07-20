import React, { useState } from 'react'

export default function HomeScreen({startGame}) {

  const [name, setName] = useState("")

  const handleChange = ({target}) => {
    setName(target.value)
  }

  const handleStartGame = () => {
    startGame(name)
  }
  
  return (
    <div>
    <h1>Play Game</h1>
    <label>
      Enter Name:      
      <input type="text" value={name} onChange={(event) => handleChange(event)}/>
    </label><br/>
    <button onClick={handleStartGame}>Start Game</button>
  </div>
  )
}
