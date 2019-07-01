import { Quiz, QuizStep, Answer } from './types'

export interface Entities<T> {
    [Key: string]: T
  }

export interface EntitiesState {
    quizes: Entities<Quiz>
    quizSteps: Entities<QuizStep>,
    answers: Entities<Answer>
}

export const SAVE_QUIZ_ENTITIES = 'SAVE_QUIZ_ENTITIES'
export const SAVE_QUIZ_STEP_ENTITY = 'SAVE_QUIZ_STEP_ENTITY'

export interface SaveQuizEntitiesAction {
    type: typeof SAVE_QUIZ_ENTITIES,
    quizes: Entities<Quiz>
}

export interface SaveQuizStepEntitiesAction {
    type: typeof SAVE_QUIZ_STEP_ENTITY,
    isRootStep: boolean,
    entityId: string,
    quizStep: QuizStep,
    answers: Entities<Answer>
}

export type EntityActions = SaveQuizEntitiesAction | SaveQuizStepEntitiesAction   