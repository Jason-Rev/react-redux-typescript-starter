/* tslint:disable:no-unused-variable */
// Required for JSX to compile
import React = require('react');
/* tslint:enable:no-unused-variable */

import {ApplicationState} from '../reducers/ApplicationState';
import {ApplicationEvents} from '../events/ApplicationEvents';
import {ExampleTextarea} from './ExampleTextarea';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import {AppNavBar} from './AppNavBar';
import {AppJumbotron} from './AppJumbotron';
import {AppFooter} from './AppFooter';

export interface AppProps extends ApplicationEvents, ApplicationState {}
export function App(props: AppProps) {
    return (
        <div>
            <AppNavBar />
            <AppJumbotron />

            <Grid>
                <Row>
                    <Col md={10} mdOffset={1}>
                        <Panel header={title} footer="Having fun with React.">
                            <Row>
                                <Col md={6}>
                                    <h2>Left</h2>
                                </Col>
                                <Col md={6}>
                                    <h2>Right</h2>
                                </Col>
                            </Row>
                            <ExampleTextarea text={props.text} onTextChangeEvent={props.onTextChangeEvent} />
                        </Panel>
                    </Col>
                </Row>
                <hr />
                <AppFooter />
            </Grid>
        </div>
    );
}

const title = <h2>Simple Samples</h2>;
