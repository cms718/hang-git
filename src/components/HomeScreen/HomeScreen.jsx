import React, { useState } from 'react'
import Categories from '../Categories/Categories'
import Header from "../Header/Header";
import './HomeScreen.css';

export default function HomeScreen({handleStartGame, allQuestions}) {

  const [name, setName] = useState("")

  const handleChange = ({target}) => {
    setName(target.value)
  }

  const startGame = (difficulty) => {
    handleStartGame(name, difficulty)
  }
  
  return (
    <div className="home">
      <Header />
      <h1>Play Game</h1>
      <label className='test'>
        Name:
      </label>
      <input className='userInput' placeholder='Enter your name here... ' type="text" value={name} onChange={(event) => handleChange(event)}/>
      <br/>
      <Categories startGame={startGame} allQuestions={allQuestions}/>
    </div>
  )
}
