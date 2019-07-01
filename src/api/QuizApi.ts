import axios from 'axios'
import { omit, join } from 'ramda'
import { normalize, schema } from 'normalizr';

const quizSchema = new schema.Entity('quizes')
const createAnswerSchema = (quizId: string) => new schema.Entity('answers', {}, {
    idAttribute: (entity) => `${quizId}-${entity.id}`,
    processStrategy: (entity) => ({ quizId: quizId, ...omit(['selected'], entity)})
})
const createQuizStepSchema = (quizId: string) => new schema.Entity('quizSteps', {
    answers: [createAnswerSchema(quizId)]
  }, 
  {
    idAttribute: (entity) => `${quizId}-${entity.id}`,  
    processStrategy: (entity) => ( { quizId: quizId, ...omit(['success'], entity) })
})

export const getQuizes = () => axios.get('api/quiz/')
    .then(res => normalize(res.data.quizzes, [quizSchema]))

export const getQuiz = (id: string, path: string[]) => async () => {
    const concatenatedPath = join(';', path) 
    const res = await axios.get(`api/quiz/${id}/path/${concatenatedPath}`);
    return normalize(res.data.currentStep, createQuizStepSchema(id));
}
