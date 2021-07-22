import React from 'react'
const axios = require('axios');

export default function GameCompleted({handleDisplayScore, user, score}) {

  const URL = process.env.REACT_APP_URL || "http://localhost:5000/players"

  const savePlayer = async () => {
    const res = await axios.post(URL, {
      name: user.name,
      score: score});
    console.log(res.data) 
  }

  const handleComplete = async () => {
    await savePlayer()
    handleDisplayScore()
  }

  return (
    <div>
      <h1>Finished!</h1>
      <button onClick={() => handleComplete()}>Submit Score</button>
    </div>
  )
}
