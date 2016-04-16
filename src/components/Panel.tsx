
/* tslint:disable:no-unused-variable */
// Required for JSX to compile
import React = require('react');
/* tslint:enable:no-unused-variable */

import { Props } from './elements';

export interface PropsWithClassNames extends Props { classNames?: string[]; }
export interface PanelProps extends Props {}
export function Panel(props: PanelProps) {
    return (
        <div className="panel panel-default">
            {props.children}
        </div>
    );
}
export interface PanelHeadingProps extends PropsWithClassNames {}

export function PanelHeading(props: PanelHeadingProps) {
    const { classNames= [] } = props;
    const className = ['panel-heading'].concat(classNames).join(' ');
    return (
        <div className={className}>
            <h4 className="panel-title">{props.children}</h4>
        </div>
    );
}

export interface PanelBodyProps extends PropsWithClassNames { }
export function PanelBody(props: PanelBodyProps) {
    const { classNames= [] } = props;
    const className = ['panel-body'].concat(classNames).join(' ');
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

export function PanelFooter(props: Props) {
    return (
        <div className="panel-footer">{props.children}</div>
    );
}


