import { Quiz, QuizStep, Answer } from '../domain/types'
import { EntityActions, Entities, SAVE_QUIZ_ENTITIES, SAVE_QUIZ_STEP_ENTITY } from '../domain/entitiesTypes'

export const saveQuizEntities = (quizes: Entities<Quiz>): EntityActions => {
    return {
        type: SAVE_QUIZ_ENTITIES,
        quizes: quizes 
    }
}

export const saveQuizStepsEntity = (isRootStep: boolean, 
    entityId: string, 
    quizStep: QuizStep,
    answers: Entities<Answer>): EntityActions => {
    return {
        type: SAVE_QUIZ_STEP_ENTITY,
        isRootStep: isRootStep,
        entityId: entityId,
        quizStep: quizStep,
        answers: answers
    }
}


