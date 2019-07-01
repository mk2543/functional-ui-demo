import { all } from 'redux-saga/effects'
import { singleQuizSaga } from './singleQuizSaga'
import { quizesSaga } from './quizesSaga'


export function* rootSaga() {
    yield all([
      singleQuizSaga(),
      quizesSaga()
    ])
  }