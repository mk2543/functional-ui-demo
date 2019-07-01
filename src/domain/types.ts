
export interface Answer {
    id: string,
    quizId: string,
    text: string,
}

export interface QuizStep {
    id: string,
    quizId: string,
    question: string,
    answers: string[]
}

export interface Quiz {
    id: string,
    title: string,
    rootQuizStep: string
}

export interface QuizProgressState {
    selectedQuizId: string | null
    path: string[]
}

export const GET_ALL_QUIZES = 'GET_ALL_QUIZES'
export const CHOOSE_QUIZ = 'CHOOSE_QUIZ'
export const QUIZ_WAS_LOADED = 'QUIZ_WAS_LOADED'
export const GET_QUIZ_QUESTION = 'GET_QUIZ_QUESTION'
export const CHOOSE_ANSWER = 'CHOOSE_ANSWER'
export const FINISH_QUIZ = 'FINISH_QUIZ'
export const GO_BACK_TO_QUESTION = 'GO_BACK_TO_QUESTION'
export const GO_BACK_TO_QUIZ_START = 'GO_BACK_TO_QUIZ_START'

export interface GetAllQuizesAction {
    type: typeof GET_ALL_QUIZES
}

export interface QuizWasLoadedAction {
    type: typeof QUIZ_WAS_LOADED,
    quiz: Quiz
}

export interface GetQuizQuestionsAction {
    type: typeof GET_QUIZ_QUESTION
}

export interface ChooseQuizAction {
    type: typeof CHOOSE_QUIZ,
    id: string
}

export interface ChooseAnswerAction {
    type: typeof CHOOSE_ANSWER,
    answerId: string
}

export interface FinishQuizAction {
    type: typeof FINISH_QUIZ
}

export interface GoBackToQuizStartAction {
    type: typeof GO_BACK_TO_QUIZ_START
}

export interface GoBackToQuestionAction {
    type: typeof GO_BACK_TO_QUESTION,
    desiredQuizStepId: string
}

export type QuizActions = GetAllQuizesAction | FinishQuizAction | GoBackToQuestionAction | GoBackToQuizStartAction |
     QuizWasLoadedAction | GetQuizQuestionsAction | ChooseQuizAction | ChooseAnswerAction

