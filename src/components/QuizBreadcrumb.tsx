import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb'

interface Props {
    items: string[],
    onItemClicked: (path: string) => unknown
    onStartClicked: () => unknown
}

export const QuizBreadcrumb: React.SFC<Props> = (props) => {
    const items = props.items.map(item => 
        <Breadcrumb.Item key={item} href="#" onClick={ () => props.onItemClicked(item) }>
            {item}
        </Breadcrumb.Item>)

    return <Breadcrumb>
        <Breadcrumb.Item href="#" onClick={ props.onStartClicked }>Quiz start</Breadcrumb.Item>
       { items }
    </Breadcrumb>
} 



