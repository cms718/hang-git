import React, { useEffect, useState } from 'react'

export default function RoundCompleted({lives, resetGame, inProgress, updateInProgress}) {
  const [lose, setLose] = useState(false)

  useEffect(() => {
    if (lives === 0) {
      setLose(true)
      updateInProgress(false)
    }
  }, [lives, updateInProgress])

  return (
    lose && !inProgress &&
    <div>
      <button onClick={resetGame}>Try again</button>
    </div>
  )
}
