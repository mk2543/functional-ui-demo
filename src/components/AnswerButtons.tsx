import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export interface AnswerButtonProps  {
  id: string,
  text: string,
};

interface Props  {
  answers: AnswerButtonProps[],
  onAnswerChoosen: (id: string) => unknown
};

export const AnswerButtons: React.SFC<Props> = props => {
  return (
    <ListGroup>
      {props.answers.map(answer => (
        <ListGroup.Item key={answer.id} action onClick={() => props.onAnswerChoosen(answer.id)}>
          {answer.text}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
