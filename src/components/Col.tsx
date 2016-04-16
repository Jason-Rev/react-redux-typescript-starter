/* tslint:disable:no-unused-variable */
// Required for JSX to compile
import React = require('react');
/* tslint:enable:no-unused-variable */
import { Props } from './elements';
import * as _ from 'lodash';

export interface ColDef {
    // Colunm Widths
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    // Column Offsets
    xsOffset?: number;
    smOffset?: number;
    mdOffset?: number;
    lgOffset?: number;
}

const defaultColClassName = 'col-md-12';

export interface ColProps extends Props, ColDef { [index: string]: any; }
export function Col(props: ColProps) {
    const className = colDefToClassNames(props).join(' ') || defaultColClassName;
    return (
        <div className={className}>{props.children}</div>
    );
}

export function colDefToClassNames(colDef: ColDef): string[] {
    return colSizeDefToClassNames(colDef).concat(colOffsetDefToClassNames(colDef));
}

export function colSizeDefToClassNames(colDef: ColDef): string[] {
    const { xs, sm, md, lg } = colDef;
    return _({xs, sm, md, lg})
        .mapValues((width: number, size: string) => ({width, size}))
        .filter<(p: any) => boolean, {width: number, size: string}>(pair => pair.width)
        .map(({width, size}) => `col-${size}-${width}`)
        .value();
}

export function colOffsetDefToClassNames(colDef: ColDef): string[] {
    const { xsOffset, smOffset, mdOffset, lgOffset } = colDef;
    return _({xs: xsOffset, sm: smOffset, md: mdOffset, lg: lgOffset})
        .mapValues((width: number, offset: string) => ({width, offset}))
        .filter<(p: any) => boolean, {width: number, offset: string}>(pair => pair.width)
        .map(({width, offset}) => `col-${offset}-offset-${width}`)
        .value();
}
