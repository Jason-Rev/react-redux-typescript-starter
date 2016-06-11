/* tslint:disable:no-unused-variable */
// Required for JSX to compile
import React = require('react');
/* tslint:enable:no-unused-variable */
import {Row, Col} from 'react-bootstrap';

export interface ExampleTextareaProps {
    text: string;
    onTextChangeEvent: (event: React.SyntheticEvent) => any;
}
export function ExampleTextarea(props: ExampleTextareaProps) {
    const {text, onTextChangeEvent} = props;
    return (
        <Row key="ExampleTextarea">
            <Row>
            <Col md={12}>
                <p className="text-center">
                    Example Text Areas sharing the same real time content
                </p>
            </Col>
            </Row>
            <Col key="left" md={6}>
                <blockquote>
                Text Box
                <textarea className="form-control" defaultValue={text} onChange={onTextChangeEvent}/>
                </blockquote>
            </Col>
            <Col key="right" md={6}>
                <blockquote>
                <p>{text}</p>
                <footer>Text Linked to the text area to the left.</footer>
                </blockquote>
            </Col>
        </Row>
    );
}
