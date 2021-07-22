import React, { useState, useEffect } from 'react'
import { userScores } from '../../UserScores';

export default function ScoreBoard({navigateBack}) {
  const [players, setPlayers] = useState()

  const URL = process.env.REACT_APP_URL || "localhost:5000/players"

  useEffect(() => {
    const getPlayers = async () => {
      const res = await fetch(URL)
      const data = await res.json()
      setPlayers(data)
    }
    getPlayers()
  }, [URL])

  if (!players) return "Loading highscores..."
  
  return (
    <div className="home">
      <button onClick={navigateBack}>Back</button>
      <h1 className="test">High Scores: </h1>
      <table align="center" >
        <tr>
          <ol>
            <td classname="scoreBoard">
            {players.map((player, index) => {
              return <li key={index}>{player.name.toUpperCase()} : {player.score} - {player.difficulty.toUpperCase()} </li>
            })}
            </td>
          </ol>
        </tr>
      </table>
    </div>
  )
}
