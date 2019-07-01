import { mergeDeepLeft } from 'ramda'
import { Answer } from '../domain/types'
import { Entities, EntityActions, SAVE_QUIZ_STEP_ENTITY } from '../domain/entitiesTypes'

const initialState: Entities<Answer> = {}

export const answerEntitiesReducer = (state = initialState, action: EntityActions): Entities<Answer> => {
    switch(action.type) {
        case SAVE_QUIZ_STEP_ENTITY:
            return action.answers ? mergeDeepLeft(state, action.answers) : state
        default:
            return state
    }
}
