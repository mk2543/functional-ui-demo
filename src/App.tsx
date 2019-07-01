import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar } from 'react-bootstrap';
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { QuizesContainer } from './containers/QuizesContainer';
import AlertContainer from './containers/AlertContainer';
import { AppState } from './reducers/root'
import { finishQuiz } from './actions/quizActions'

interface AppProps {
  store: Store<AppState>
}

const App: React.FC<AppProps> = (props) => {
  return (
    <Provider store={props.store} >
    <Container>
      <AlertContainer />
      <Navbar bg="light">
        <Navbar.Brand href="#home" 
          onClick={ () => props.store.dispatch(finishQuiz()) }>
            Quiz selector
          </Navbar.Brand>
      </Navbar>
      <QuizesContainer />
    </Container>
    </Provider>
  );
}

export default App;
