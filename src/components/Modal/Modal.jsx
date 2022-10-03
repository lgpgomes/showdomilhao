
import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

import Card from '../Card/Card'

import './Modal.css'


const Modal = (props) => {
    const [quizState, dispatch] = useContext(QuizContext)

    const onSelectCard = (card) => {
        dispatch({
          type: "CARD_SELECTED",
          payload: { card },
        })
      }
      
    if (!props.show) return null
    return (
        <div className={`modal ${props.show ? 'show' : ''} `}>
            <div className='modal-content'>
                <div className='cards'>
                    {
                        quizState.cards.map((card) => (
                            <Card key={card.value} flip={quizState.cardSelected === card} card={card} selectCard={() => onSelectCard(card)}/>
                        ))
                    }

                </div>
                <div className='modal-close' onClick={() => dispatch({ type: "CLOSE_MODAL_CARDS" })}>
                    &#10006;
                </div>
            </div>
            
        </div>
    )
}

export default Modal