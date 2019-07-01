import React from 'react';
import { QuizBreadcrumb } from './QuizBreadcrumb'
import {AnswerButtons, AnswerButtonProps} from './AnswerButtons'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button';

interface Props {
    question: string,
    breadcrumb: string[],
    answers: AnswerButtonProps[],
    onBreadcrumbItemClicked: (path: string) => unknown,
    onBreadcrumbStartClicked: () => unknown,
    onAnswerChoosen: (answerId: string) => unknown,
    onFinishQuiz: () => unknown
}

export const Question: React.SFC<Props> = (props) => {
    const finishButton = (props.answers.length ? null : <Button onClick={props.onFinishQuiz} >Finish quiz</Button>)

    return <Jumbotron>
        <QuizBreadcrumb items={props.breadcrumb} 
            onItemClicked={ props.onBreadcrumbItemClicked }
            onStartClicked={ props.onBreadcrumbStartClicked } />
       <h2>{props.question}</h2>
       <AnswerButtons answers={props.answers} onAnswerChoosen={props.onAnswerChoosen} />
       { finishButton }
    </Jumbotron>
} 
