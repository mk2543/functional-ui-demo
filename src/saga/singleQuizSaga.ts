import { call, put, takeLatest, select } from 'redux-saga/effects'
import { toPairs } from 'ramda'
import { getQuiz } from '../api/QuizApi'
import { ChooseQuizAction, ChooseAnswerAction, CHOOSE_QUIZ, CHOOSE_ANSWER, QuizStep } from '../domain/types'
import { saveQuizStepsEntity } from '../actions/entityActions'
import { communicationErrorHasHappened } from '../actions/systemActions'
import { getCurrentPath, getCurrentQuizId } from '../selectors/quizSelectors'


function* performCall(quizId: string, quizPath: string[]) {
    try {
        const responseData = yield call(getQuiz(quizId, quizPath));
        const [ entityId, entity ] = toPairs(responseData.entities.quizSteps)[0] as [string, QuizStep]
        yield put(saveQuizStepsEntity(quizPath.length === 0, 
        entityId,
        entity, 
        responseData.entities.answers));
    } catch (e) {
       yield put(communicationErrorHasHappened());
    }  
}

 function* fetchRootStep(action: ChooseQuizAction) {
      yield performCall(action.id, [])        
}

function* fetchFurtherSteps(action: ChooseAnswerAction) {
    const quizId = yield select(getCurrentQuizId)
    const quizPath = yield select(getCurrentPath)  
    yield performCall(quizId, quizPath)        
}

 export function* singleQuizSaga() {
    yield takeLatest(CHOOSE_QUIZ, fetchRootStep);
    yield takeLatest(CHOOSE_ANSWER, fetchFurtherSteps)
  }
  