
import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

import './Card.css'

const Card = (props) => {
    const [quizState, dispatch] = useContext(QuizContext)

    return (
    <div className='card' onClick={() => props.selectCard()} >
        <div className={`card-inner ${quizState.card.value === props.card.value ? 'flip' : ''}`}>

            <div className='card-back'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" viewBox="0 0 512.000000 512.000000">
                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                        <path d="M0 2560 l0 -2560 2560 0 2560 0 0 2560 0 2560 -2560 0 -2560 0 0 -2560z m4320 40 l0 -1800 -1760 0 -1760 0 0 1800 0 1800 1760 0 1760 0 0 -1800z"/>
                        <path d="M1760 2560 l0 -800 800 0 800 0 0 800 0 800 -800 0 -800 0 0 -800z"/>
                    </g>
                </svg>
            </div>

            <div className='card-front'>
                <div className='card-front-top'>
                    <div>
                        <div className='card-front-naip'> {props.card.value} </div>
                        <div className='card-front-symbol'>&clubs;</div>
                    </div>
                </div>

                <div className="card-front-middle">
                    <div>
                        <div className='card-front-symbol'>&clubs;</div>
                    </div>
                </div>

                <div className="card-front-bottom">
                    <div>
                        <div className='card-front-naip'> {props.card.value} </div>
                        <div className='card-front-symbol'>&clubs;</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Card