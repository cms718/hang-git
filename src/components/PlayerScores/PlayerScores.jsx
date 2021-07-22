import React, { useState, useEffect } from 'react'

export default function Players(){
  const players = [players, setPlayers] = useState()

  const URL = process.env.REACT_APP_URL || "localhost:5000/players"

  useEffect(() => {
    const getPlayers = async () => {
      const res = await fetch(URL)
      const data = await res.json()
      setPlayers(data)
    }
    getPlayers()
  }, [URL])
  
  return(
    players
  )
}