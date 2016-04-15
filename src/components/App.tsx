/* tslint:disable:no-unused-variable */
// Required for JSX to compile
import React = require('react');
/* tslint:enable:no-unused-variable */

import {ApplicationState} from '../reducers/ApplicationState';
import {ApplicationEvents} from '../events/ApplicationEvents';

export interface AppProps extends ApplicationEvents, ApplicationState {}
export function App(props: AppProps) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>React Redux Typescript Starter</h1>
                </div>
            </div>
        </div>
    );
}
