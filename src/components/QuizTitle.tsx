import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface QuizTypeProps {
    title: string,
    onClick: () => unknown
}

export const QuizTitle: React.SFC<QuizTypeProps> = (props) => {
    return <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Button variant="primary" onClick={props.onClick} >Start</Button>
    </Card.Body>
  </Card>
}