
import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

import ButtonHelp from '../ButtonHelp/ButtonHelp'

import {ReactComponent as IconCards} from '../../img/iconOfCards.svg'
import {ReactComponent as IconUniversity} from '../../img/iconOfUniversity.svg'
import {ReactComponent as IconPeople} from '../../img/iconOfPeople.svg'
import {ReactComponent as IconArrow} from '../../img/iconOfArrow.svg'

import './CircleMenu.css'


const CircleMenu = () => {
    const [quizState, dispatch] = useContext(QuizContext)

    return (


            <>
                <ButtonHelp clickButtonHelp={ () => dispatch({ type: "OPEN_MODAL_CARDS" }) } disabled={quizState.cardSelected}>
                    <IconCards/>
                </ButtonHelp>

                <ButtonHelp clickButtonHelp={ () => dispatch({ type: "" }) } >
                    <IconUniversity/>
                </ButtonHelp>

                <ButtonHelp clickButtonHelp={ () => dispatch({ type: "" }) }>
                    <IconPeople/>
                </ButtonHelp>

                <ButtonHelp clickButtonHelp={ () => dispatch({ type: "CHANGE_QUESTION" }) } disabled={quizState.currentQuestion - quizState.score >= 3}>
                    <IconArrow/>
                </ButtonHelp>
            </>

    )
}

export default CircleMenu