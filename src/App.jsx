import './App.css';

import { useContext } from 'react'
import { QuizContext } from './context/quiz';

import Welcome from './components/Welcome';
import Questions from './components/Questions';

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Questions/>}
      {quizState.gameStage === "End" && <Welcome/>}

    </div>
  );
}

export default App;
