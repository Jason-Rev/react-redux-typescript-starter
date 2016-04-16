/* tslint:disable:no-unused-variable */
// Required for JSX to compile
import React = require('react');
/* tslint:enable:no-unused-variable */
import { Props } from './elements';

export function Row(props: Props) {
    return (
        <div className="row">{props.children}</div>
    );
}
