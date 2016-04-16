/* tslint:disable:no-unused-variable */
// Required for JSX to compile
import React = require('react');
/* tslint:enable:no-unused-variable */

import {ApplicationState} from '../reducers/ApplicationState';
import {ApplicationEvents} from '../events/ApplicationEvents';
import {Panel, PanelBody, PanelHeading, PanelFooter} from './UiElements';
import {Row, Col} from './UiElements';
import {ExampleTextarea} from './ExampleTextarea';

export interface AppProps extends ApplicationEvents, ApplicationState {}
export function App(props: AppProps) {
    return (
        <div className="container">
            <Row>
                <Col md="10" mdOffset="1">
                    <Panel>
                        <PanelHeading>React Redux Typescript Starter</PanelHeading>
                        <PanelBody>
                            <Row>
                                <Col md="6">
                                    <h2>Left</h2>
                                </Col>
                                <Col md="6">
                                    <h2>Right</h2>
                                </Col>
                            </Row>
                            <ExampleTextarea text={props.text} onTextChangeEvent={props.onTextChangeEvent} />
                        </PanelBody>
                        <PanelFooter>Having fun with React.</PanelFooter>
                    </Panel>
                </Col>
            </Row>
        </div>
    );
}
