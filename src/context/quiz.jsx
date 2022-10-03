import { createContext, useReducer } from "react";
import questions from '../data/questions'

const STAGES = ["Start", "Playing", "End"]
const AWARDS = ["0", "1000", "2000", "3000", "4000", "5000", "10000", "20000", "30000", "40000", "50000", "100000", "200000", "300000", "400000", "500 mil", "1  milhão"]

const CARDS = [ 
    {value: "K", cardsForRemove: 0}, 
    {value: "A", cardsForRemove: 1}, 
    {value: "2", cardsForRemove: 2}, 
    {value: "3", cardsForRemove: 3} 
]

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,

    answerSelected: false,
    answerConfirmed: false,

    award: AWARDS,

    cardSelected: 0,
    optionsForRemove: [],
}


const quizReducer = (state, action) => {
    console.log(state, action)
    switch(action.type) {
        case "CHANGE_STATE":

            return {
                ...state,
                gameStage: STAGES[1]
            }

        case "REORDER_QUESTIONS_AND_CARDS": 
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5
            })

            const reorderedCards = CARDS.sort(() => {
                return Math.random() - 0.5
            })

            return {
                ...state,
                cards: reorderedCards,
                questions: reorderedQuestions
            }

        case "CHECK_ANSWER":       
            const option = action.payload.option
        
            return {
                ...state,
                answerSelected: option
            }

        case "CHANGE_QUESTION": 
            if (state.currentQuestion - state.score >= 3) return state

            let nextQuestion = state.currentQuestion + 1
            let endGame = false

            if (!state.questions[nextQuestion] || state.answerConfirmed === 'incorrect') endGame = true
            

            return {
                ...state,
                currentQuestion: nextQuestion,
                answerConfirmed: false,
                gameStage: endGame ? STAGES[2] : state.gameStage 
            }


        case "CONFIRM_ANSWER": 
            if (state.answerConfirmed) return state

            const answer = action.payload.answer

            let correctAnswer = 0

            if (answer === state.answerSelected) correctAnswer = 1

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: false,
                answerConfirmed: correctAnswer ? 'correct' : 'incorrect',
            }
        

        case "OPEN_MODAL_CARDS":

            return {
                ...state,
                modalCardsVisible: 1
            }

        case "CLOSE_MODAL_CARDS":

            return {
                ...state,
                modalCardsVisible: 0
            }
    
        case "CARD_SELECTED":
            if (state.cardSelected) return state

            const card = action.payload.card
            const questionForRemoveOptions = questions[state.currentQuestion]

            let optionsForRemove = []

            questionForRemoveOptions.options.map((option) => (
                (option !== questionForRemoveOptions.answer) && (
                    optionsForRemove.push(option)
                )
            ))
            
            const reorderedOptionsForRemove = optionsForRemove.sort(() => {
                return Math.random() - 0.5
            }).slice(0, card.cardsForRemove)


            return {
                ...state,
                cardSelected: card,
                optionsForRemove: reorderedOptionsForRemove
            }

            
        default: 
            return state;
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState)
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}


