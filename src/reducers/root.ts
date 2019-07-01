import { quizProgressReducer } from './quizProgressReducers'
import { entitiesReducer } from './entitiesReducer'
import { systemReducer } from './systemReducers'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    system: systemReducer,
    entities: entitiesReducer,
    quizProgress: quizProgressReducer
  })

export type AppState = ReturnType<typeof rootReducer>