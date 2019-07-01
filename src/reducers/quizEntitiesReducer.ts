import { mergeDeepLeft } from 'ramda'
import { Quiz } from '../domain/types'
import { Entities, EntityActions, SAVE_QUIZ_ENTITIES, SAVE_QUIZ_STEP_ENTITY } from '../domain/entitiesTypes'

const initialState: Entities<Quiz> = {}

export const quizEntitiesReducer = (state = initialState, action: EntityActions): Entities<Quiz> => {
    switch(action.type) {
        case SAVE_QUIZ_ENTITIES:
            return mergeDeepLeft(state, action.quizes)
        case SAVE_QUIZ_STEP_ENTITY:
            if (action.isRootStep) {
                const rootStep = action.quizStep
                const quiz = state[rootStep.quizId]
                if (quiz) {
                    const updatedQuiz = { ...quiz, rootQuizStep: action.entityId }
                    return { ...state, [quiz.id]: updatedQuiz }
                }
            }    
            return state
        default:
            return state
    }
}
