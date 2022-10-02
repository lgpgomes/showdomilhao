import React from 'react'

import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

const End = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div>
      { (quizState.award[quizState.score]) }
    </div>
  )
}

export default End