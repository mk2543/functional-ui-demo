import { createSelector } from 'reselect'
import { Quiz, QuizProgressState } from '../domain/types'
import { Entities } from '../domain/entitiesTypes'
import { AppState } from '../reducers/root'

const quizEntities = (state: AppState): Entities<Quiz> => state.entities.quizes
const quizProgressState = (state: AppState): QuizProgressState => state.quizProgress
const allQuizTitles = (state: AppState) => state.entities.quizes
const allQuizSteps = (state: AppState) => state.entities.quizSteps
const allAnswers = (state: AppState) => state.entities.answers

export const getQuizes = createSelector([quizEntities], (quizesDict): Quiz[] => Object.values(quizesDict))

export const getCurrentQuizId = createSelector([quizProgressState], (quizProgress) => quizProgress.selectedQuizId)
export const getCurrentPath = createSelector([quizProgressState], (quizProgress) => quizProgress.path)

export const isQuizInProgress = createSelector([getCurrentQuizId], 
    (id) => id !== null )

export const getSelectedQuiz = createSelector(
    [getCurrentQuizId,
     getCurrentPath,    
    allQuizTitles, 
    allQuizSteps, 
    allAnswers ], 
    (quizId, path, quizes, quizSteps, answers) => {
        if (quizId) { 
            const quiz = quizes[quizId]
            const quizStepEntityId = path.length ? `${quizId}-${path[path.length - 1]}` : quiz.rootQuizStep
            const quizStep = quizSteps[quizStepEntityId]
            const answersForQuizStep = quizStep ? quizStep.answers
                .map( answerEntityId => answers[answerEntityId])
                .map( answer => ({id: answer.id, text: answer.text })) : []
            return {
                quizId: quizId,
                title: quiz.title,
                path: path,
                question: quizStep ? quizStep.question : null,
                answers: answersForQuizStep
            }
        } else {
            return null;
        }
    })