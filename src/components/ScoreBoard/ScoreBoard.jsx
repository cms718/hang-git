import React from 'react'
import {userScores} from '../../UserScores'

export default function ScoreBoard({navigateBack}) {
  return (
    <div>
      <button onClick={navigateBack}>Back</button>
      <h1>High Scores: </h1>
      
      {userScores}
      
      {/* {/ Map over and return list of <Player /> components /}
      {userScores.map((player) => {
      return <User />
      })} */}
    </div>
  )
}
