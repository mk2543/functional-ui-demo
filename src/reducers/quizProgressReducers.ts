import { append, dropLastWhile } from 'ramda'
import { QuizProgressState, QuizActions,
     CHOOSE_QUIZ, CHOOSE_ANSWER, FINISH_QUIZ, 
     GO_BACK_TO_QUIZ_START, GO_BACK_TO_QUESTION } from '../domain/types'

const initialState: QuizProgressState = {
    selectedQuizId: null,
    path: []
  }

export const quizProgressReducer = (state = initialState, action: QuizActions): QuizProgressState => {
    switch(action.type) {
        case CHOOSE_QUIZ:
            return {...state, selectedQuizId: action.id } 
        case CHOOSE_ANSWER: {
            const updatedPath = append(action.answerId, state.path)
            return {...state, path: updatedPath }
        }
        case GO_BACK_TO_QUESTION: {
            const updatedPath = dropLastWhile(el => el !== action.desiredQuizStepId, state.path)
            return {...state, path: updatedPath }       
        } 
        case GO_BACK_TO_QUIZ_START: 
            return {...state, path: []}    
        case FINISH_QUIZ:
            return initialState      
        default:
            return state
    }
}