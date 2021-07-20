import React, { useState } from 'react'
import Categories from '../Categories/Categories'

export default function HomeScreen({handleStartGame, allQuestions}) {

  const [name, setName] = useState("")

  const handleChange = ({target}) => {
    setName(target.value)
  }

  const startGame = (difficulty) => {
    handleStartGame(name, difficulty)
  }
  
  return (
    <div>
    <h1>Play Game</h1>
    <label>
      Enter Name:      
      <input type="text" value={name} onChange={(event) => handleChange(event)}/>
    </label><br/>
    <Categories startGame={startGame} allQuestions={allQuestions}/>
  </div>
  )
}
