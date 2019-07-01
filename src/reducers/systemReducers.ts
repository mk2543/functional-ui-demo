import { combineReducers } from 'redux'
import { SystemActions,
     ALERT_WAS_DISMISSED, COMMUNICATION_ERROR_HAS_HAPPENED } from '../domain/systemTypes'
import { QuizActions, GET_ALL_QUIZES, CHOOSE_QUIZ } from '../domain/types'
import { SAVE_QUIZ_ENTITIES, SAVE_QUIZ_STEP_ENTITY, EntityActions } from '../domain/entitiesTypes'


const alertsReducer = (state = false, action: SystemActions): boolean => {
    switch(action.type) {
        case ALERT_WAS_DISMISSED:
            return false
        case COMMUNICATION_ERROR_HAS_HAPPENED:
            return true
        default:
            return state    
    }    
}

const requestsInProgressReducer = (state = 0, action: QuizActions | EntityActions | SystemActions): number => {
    switch(action.type) {
        case CHOOSE_QUIZ:
        case GET_ALL_QUIZES:
            return state + 1 
        case SAVE_QUIZ_ENTITIES:
        case SAVE_QUIZ_STEP_ENTITY:        
            return state - 1 
        default:
            return state    
    }    
}

export const systemReducer = combineReducers({
    requestsInProgress: requestsInProgressReducer,
    shouldDisplayAlert: alertsReducer
  })
