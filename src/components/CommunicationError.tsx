import React from 'react';
import Alert from 'react-bootstrap/Alert'

interface Props {
    onClose: () => unknown
}

export const CommunicationError: React.SFC<Props> = (props) => {
    return  <Alert variant="danger" onClose={ props.onClose } dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p> Something unexpected has happened. Please try again. </p>
  </Alert>
}