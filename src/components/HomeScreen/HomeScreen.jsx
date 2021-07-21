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
        Enter Name:      
        <input type="text" value={name} onChange={(event) => handleChange(event)}/>
      </label><br/>
      <Categories startGame={startGame} allQuestions={allQuestions}/>
    </div>
  )
}
