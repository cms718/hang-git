import React from 'react'
import './Category.css'

export default function Categories({allQuestions, startGame}) {

  const uniqueCategories = [...new Set(allQuestions.map(questions => questions.level))]

  return (
    <div>
      {uniqueCategories.map(category => {
        return <button className="btn-category" onClick={() => startGame(category)}>{category}</button>
      })}
    </div>
  )
}
