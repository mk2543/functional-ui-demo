import React from 'react';
import { connect } from 'react-redux'
import { QuizesDeckContainer } from './QuizesDeckContainer'
import { QuizInProgressContainer } from './QuizInProgressContainer'
import { AppState } from '../reducers/root'
import { isQuizInProgress } from '../selectors/quizSelectors'

const mapStateToProps = (state: AppState) => ({ 
    isQuizInProgress: isQuizInProgress(state)
})

type StateProps = ReturnType<typeof mapStateToProps>
type Props = StateProps 

const Quizes: React.SFC<Props> = (props) => {

    const childContainer = props.isQuizInProgress ? <QuizInProgressContainer /> : <QuizesDeckContainer />
    return <>
        {childContainer}
    </>
} 

export const QuizesContainer = connect<StateProps, {}, {}, AppState>(mapStateToProps)(Quizes)