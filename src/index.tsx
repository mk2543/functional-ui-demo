import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from './store/store'
import { getAllQuizes } from './actions/quizActions'

const store = configureStore()
store.dispatch(getAllQuizes())

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
