import logo from '../img/sm.png'

import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Option from '../components/Option'

import './Questions.css'


const Questions = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    const onSelectOption = (option) => {
        dispatch({
          type: "CHECK_ANSWER",
          payload: { option },
        });
      };

    return (
        <div className='questions-wrapper'>
            <div className='questions'>
                <div className='header'>
                    <img className='logo-sm' src={logo} alt="logotipo"/>
                    <div>{currentQuestion.question}</div>
                </div>

                
                <div id='options'>
                    {
                        currentQuestion.options.map((option, index) => (
                            <Option option={option} key={option} index={index} answer={currentQuestion.answer} selectOption={() => onSelectOption(option)}/>
                        ))
                    }
                </div>

                <div className='actions'>
                    {quizState.answerSelected && (
                        <button onClick={() => dispatch({ type: "CONFIRM_ANSWER", payload: { answer: currentQuestion.answer }, })}>
                            Confirmar
                        </button>
                        
                    )}

                    {quizState.answerConfirmed && (
                        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
                            Continuar
                        </button>
                    )}
                </div>




            </div>
        </div>
    )
}

export default Questions