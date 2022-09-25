
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import './Option.css' 

const Option = (props) => {
    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <div >
            <input onChange={() => props.selectOption()} className='d-none' type="radio" name="questions" id={`question_${props.index}`} disabled={quizState.answerConfirmed}/>
            <label htmlFor={`question_${props.index}`} className={`option ${quizState.answerConfirmed && props.option === props.answer ? "correct" : ""}` }>
                
                <div className='option-number-wrapper'>
                    <div className='option-number'>
                        <div className='number'>
                            {props.index + 1}
                        </div>
                        
                    </div>
                </div>

                <div className='option-answer'>
                    {props.option}
                </div>
            </label>
        </div>
    )
}

export default Option