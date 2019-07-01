import { getQuizes } from '../api/QuizApi'
import { GetAllQuizesAction, GET_ALL_QUIZES } from '../domain/types'
import { saveQuizEntities } from '../actions/entityActions'
import { call, put, takeEvery } from 'redux-saga/effects'
import { communicationErrorHasHappened } from '../actions/systemActions'

function* fetchAllQuizes(action: GetAllQuizesAction) {
    try {
       const responseData = yield call(getQuizes);
       yield put(saveQuizEntities(responseData.entities.quizes));
    } catch (e) {
      yield put(communicationErrorHasHappened());
    }
 }
 
 export function* quizesSaga() {
    yield takeEvery(GET_ALL_QUIZES, fetchAllQuizes);
  }