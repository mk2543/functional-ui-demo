import { QuizStep } from '../domain/types'
import { Entities, EntityActions, SAVE_QUIZ_STEP_ENTITY } from '../domain/entitiesTypes'

const initialState: Entities<QuizStep> = {}

export const quizStepEntitiesReducer = (state = initialState, action: EntityActions): Entities<QuizStep> => {
    switch(action.type) {
        case SAVE_QUIZ_STEP_ENTITY:
            return { ...state, 
                [action.entityId]: action.quizStep }
        default:
            return state
    }
}
