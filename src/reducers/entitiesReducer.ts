import { combineReducers } from 'redux'
import { quizEntitiesReducer } from './quizEntitiesReducer'
import { quizStepEntitiesReducer} from './quizStepEntitiesReducer'
import { answerEntitiesReducer } from './answerEntitiesReducer'


export const entitiesReducer = combineReducers({
    quizes: quizEntitiesReducer,
    quizSteps: quizStepEntitiesReducer,
    answers: answerEntitiesReducer
  })

export type EntitiesState = ReturnType<typeof entitiesReducer>