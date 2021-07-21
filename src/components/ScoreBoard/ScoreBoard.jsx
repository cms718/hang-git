import React, { useState, useEffect } from 'react'
import { userScores } from '../../UserScores';

export default function ScoreBoard({navigateBack, userScores}) {
  const [players, setPlayers] = useState(userScores)

  const URL = process.env.REACT_APP_URL || "localhost:5000/players"

  useEffect(() => {
    const getPlayers = async () => {
      const res = await fetch(URL)
      const data = await res.json()
      setPlayers(data)
    }
    getPlayers()
  }, [URL])

  if (!players) return "Error Loading Players"
  return (
    <div>
      <button onClick={navigateBack}>Back</button>
      <h1>High Scores: </h1>
      <ol>
      {players.map((player) => {
        return <li key={player.username}>{player.username.toUpperCase()} : {player.score}</li>
      })}
      </ol>
    </div>
  )
}
