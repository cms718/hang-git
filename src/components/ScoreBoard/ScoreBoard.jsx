import React from 'react'

export default function ScoreBoard({navigateBack}) {
  return (
    <div>
      <button onClick={navigateBack}>Back</button>
      <h1>High Scores: </h1>
    </div>
  )
}
