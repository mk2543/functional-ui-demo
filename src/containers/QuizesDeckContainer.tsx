import React from 'react';
import { connect } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import { QuizesDeck } from '../components/QuizesDeck'
import { chooseQuiz, finishQuiz } from '../actions/quizActions'
import { AppState } from '../reducers/root'
import { getQuizes } from '../selectors/quizSelectors'
import { isSomethingInProgress } from '../selectors/appSelectors'

const mapStateToProps = (state: AppState) => ({ 
    quizes: getQuizes(state),
    isInProgress: isSomethingInProgress(state),
})

const mapDispatchToProps = ({
    onChooseQuiz: chooseQuiz,
    onQuizFinished: finishQuiz,
})

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof mapDispatchToProps
type Props = StateProps & DispatchProps

const AllQuizes: React.SFC<Props> = (props) => {

    const spinner = props.isInProgress ? <Spinner animation="border" /> : null 

    return <>
        { spinner }
        <QuizesDeck quizes={props.quizes} onChooseQuiz={props.onChooseQuiz} />
    </>
} 

export const QuizesDeckContainer = connect<StateProps, DispatchProps, {}, AppState>(mapStateToProps, mapDispatchToProps)(AllQuizes)