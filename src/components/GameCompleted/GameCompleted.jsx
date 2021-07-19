import React from 'react'

export default function GameCompleted({handleDisplayScore}) {
  return (
    <div>
      <h1>Finished!</h1>
      <button onClick={handleDisplayScore}>Submit Score</button>
    </div>
  )
}
