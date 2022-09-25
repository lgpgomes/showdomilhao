import { createContext, useReducer } from "react";
import questions from '../data/questions'

const STAGES = ["Start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0, 
    answerSelected: false,
    answerConfirmed: false,
    continue: false
}


const quizReducer = (state, action) => {
    console.log(state, action)
    switch(action.type) {
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1]
            }
        case "REORDER_QUESTIONS": 
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5
            })

            return {
                ...state,
                questions: reorderedQuestions
            }

        case "CHANGE_QUESTION": 
            const nextQuestion = state.currentQuestion + 1
        
            let endgame

            if (!state.continue) endgame = true

            return {
                ...state,
                currentQuestion: nextQuestion,
                answerConfirmed: false,
                gameStage: endgame ? STAGES[2] : state.gameStage 
            }

        case "CHECK_ANSWER":       
            const option = action.payload.option;
        
            return {
                ...state,
                answerSelected: option
            };

        case "CONFIRM_ANSWER": 
        
            if (state.answerConfirmed) return state;

            const answer = action.payload.answer;

            let correctAnswer = 0;

            if (answer === state.answerSelected) correctAnswer = 1;

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: false,
                answerConfirmed: true,
                continue: correctAnswer
            };
        
        default: 
            return state;
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState)

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}


