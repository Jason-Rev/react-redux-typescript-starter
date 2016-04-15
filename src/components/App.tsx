/* tslint:disable:no-unused-variable */
// Required for JSX to compile
import React = require('react');
/* tslint:enable:no-unused-variable */

import {ApplicationState} from '../reducers/ApplicationState';
import {ApplicationEvents} from '../events/ApplicationEvents';
import {Row, Col} from 'revinate-react-shared-components';

export interface AppProps extends ApplicationEvents, ApplicationState {}
export function App(props: AppProps) {
    return (
        <div className="container">
            <Row>
                <Col>
                    <h1>Survey Analytics Viewer</h1>
                </Col>
            </Row>
        </div>
    );
}
