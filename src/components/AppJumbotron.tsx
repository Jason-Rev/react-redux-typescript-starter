/* tslint:disable:no-unused-variable */
// Required for JSX to compile
import React = require('react');
/* tslint:enable:no-unused-variable */

import {Jumbotron} from 'react-bootstrap';

export function AppJumbotron() {
    return (
        <Jumbotron>
            <h1>React-Redux-Typescript Starter App</h1>
            <p>
                This is a working sample application to show one way of setting up React, Redux, and Typscript.
            </p>
        </Jumbotron>
    );
}
