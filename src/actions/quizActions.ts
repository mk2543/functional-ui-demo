import {QuizActions, GET_ALL_QUIZES, CHOOSE_QUIZ, CHOOSE_ANSWER,
     FINISH_QUIZ, GO_BACK_TO_QUIZ_START, GO_BACK_TO_QUESTION} from '../domain/types'

export const getAllQuizes = (): QuizActions => ({type: GET_ALL_QUIZES})

export const finishQuiz = (): QuizActions => ({type: FINISH_QUIZ })

export const chooseQuiz = (id: string): QuizActions => { 
    return { type: CHOOSE_QUIZ, id: id }
}

export const chooseAnswer = (answerId: string): QuizActions => {
     return {type: CHOOSE_ANSWER, answerId: answerId}
}

export const goBackToQuizStart = (): QuizActions => ({type: GO_BACK_TO_QUIZ_START })


export const goBackToQuestion = (desiredQuizStepId: string): QuizActions => {
    return { type: GO_BACK_TO_QUESTION, desiredQuizStepId: desiredQuizStepId }
}