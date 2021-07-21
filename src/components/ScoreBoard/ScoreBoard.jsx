import React from 'react'
//userScores currently hardcoded, needs database

export default function ScoreBoard({navigateBack, userScores}) {
  return (
    <div>
      <button onClick={navigateBack}>Back</button>
      <h1>High Scores</h1>
      <ol>
      {userScores.map((player) => {
        return <li key={player.username}>{player.username.toUpperCase()} : {player.score}</li>
      })}
      </ol>
    </div>
  )
}
