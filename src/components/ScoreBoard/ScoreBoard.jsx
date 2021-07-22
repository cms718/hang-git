import React from 'react'

export default function ScoreBoard({navigateBack, players}) {

  if (!players) return "Loading highscores..."
  
  return (
    
    <div className="home">
      <button className="btn-category" onClick={navigateBack}>Back</button>
      <h1 className="test">High Scores: </h1>
      <table align="center" >
        <tbody>
        <tr>
            <td className="scoreBoard">
              <ol>
              {players.map((player, index) => {
                return <li key={index}>{player.name.toUpperCase()} : {player.score} - {player.difficulty.toUpperCase()} </li>
              })}
              </ol>
            </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}
