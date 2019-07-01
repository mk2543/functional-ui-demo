import React from 'react';
import { connect } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import { Question } from '../components/Question'
import { chooseAnswer, finishQuiz, goBackToQuestion, goBackToQuizStart } from '../actions/quizActions'
import { AppState } from '../reducers/root'
import { getSelectedQuiz } from '../selectors/quizSelectors'
import { isSomethingInProgress } from '../selectors/appSelectors'

const mapStateToProps = (state: AppState) => ({ 
    isInProgress: isSomethingInProgress(state),
    quiz: getSelectedQuiz(state) 
})

const mapDispatchToProps = ({
    onChooseAnswer: chooseAnswer,
    onQuizFinished: finishQuiz,
    onBreadcrumbItemClicked: goBackToQuestion,
    onBreadcrumbStartClicked: goBackToQuizStart 
})

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof mapDispatchToProps
type Props = StateProps & DispatchProps

const QuizInProgress: React.SFC<Props> = (props) => {

    const spinner = props.isInProgress ? <Spinner animation="border" /> : null 

    const question = props.quiz && props.quiz.question ? <Question 
        question={ props.quiz.question } 
        answers={ props.quiz.answers }
        breadcrumb={ props.quiz.path }
        onAnswerChoosen={ props.onChooseAnswer }
        onFinishQuiz={ props.onQuizFinished }
        onBreadcrumbItemClicked={ props.onBreadcrumbItemClicked }
        onBreadcrumbStartClicked={ props.onBreadcrumbStartClicked }
        /> : null

    return <>
        { spinner }
        { question }
    </>
} 

export const QuizInProgressContainer = 
    connect<StateProps, DispatchProps, {}, AppState>(mapStateToProps, mapDispatchToProps)(QuizInProgress)