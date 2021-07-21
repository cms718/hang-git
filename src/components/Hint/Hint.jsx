import React from 'react'

export default function Hint({hint}) {
  return (
    <div className="hint-container">
      What is a command that will <strong>{hint}</strong>?:
      <br></br> git ...
    </div>
  )
}