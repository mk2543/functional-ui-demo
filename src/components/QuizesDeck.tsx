import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import { QuizTitle } from './QuizTitle'
import { Quiz } from '../domain/types'

interface Props {
    quizes: Quiz[],
    onChooseQuiz: (id: string) => unknown    
}

export const QuizesDeck: React.SFC<Props> = (props) => {
    const quizes = props.quizes.map(element => 
        <QuizTitle
            key={ element.id }  
            title={element.title} 
             onClick={() => props.onChooseQuiz(element.id)}
        />);

    return <CardDeck>
            {quizes}
        </CardDeck>
} 
