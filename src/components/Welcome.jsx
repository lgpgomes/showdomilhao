import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import logo from '../img/sm.png'

import './Welcome.css'

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <div id='welcome'>
            <div >
                <img src={logo} alt='logotipo'/>
                <button onClick={() => {dispatch({type: "CHANGE_STATE"})}}>
                    Iniciar!
                </button>
            </div>
        </div>
    )
}

export default Welcome