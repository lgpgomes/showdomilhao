import './App.css';

import { useContext } from 'react'
import { QuizContext } from './context/quiz'
import { useEffect } from 'react'

import Welcome from './components/Welcome'
import Questions from './components/Questions'
import End from './components/End'


function App() {
  const [quizState, dispatch] = useContext(QuizContext)
  
  useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])

  return (
    <div>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Questions/>}
      {quizState.gameStage === "End" && <End/>}
    </div>
  );
}

export default App;
