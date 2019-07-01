import { logger } from 'redux-logger'
import { Store, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { AppState, rootReducer } from '../reducers/root'
import { rootSaga } from '../saga/rootSaga'

export const configureStore = (): Store<AppState> => {

    const composeEnhancers = composeWithDevTools({})
    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(sagaMiddleware, logger))
    )

    sagaMiddleware.run(rootSaga)  
    
    return store
  }
